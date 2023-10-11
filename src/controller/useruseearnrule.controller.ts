import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

//user use earnrule @ shop

export async function userUseEarnRule(req: Request, res: Response) {
  try {
    const { userId, shopId, earnruleId } = req.body
    if (!userId || !shopId || !earnruleId) {
      res.status(400).json({ message: 'missing required field' })
      return
    }

    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId
      }
    })

    if (!shop) {
      res.status(400).json({ message: 'shop not found' })
      return
    }

    const communityId = shop?.communityId as string

    const EarnRule = await prisma.earnrule.findUnique({
      where: {
        id: earnruleId
      }
    })

    if (!EarnRule) {
      res.status(400).json({ message: 'earnrule not found' })
      return
    }

    const check = shop.earnruleIds?.includes(EarnRule?.id as string)

    if (!check) {
      res.status(400).json({ message: 'earnrule not found in shop' })
      return
    }

    let userUsedEarnrule: Prisma.JsonObject =
      (EarnRule.userUseEarnrule as Prisma.JsonObject) || {}

    // userUsedEarnrule is null or not object
    if (
      typeof EarnRule?.userUseEarnrule !== 'object' ||
      EarnRule?.userUseEarnrule === null
    ) {
      //initiate userUseEarnrule
      userUsedEarnrule = {
        [communityId]: {
          user: {
            [userId]: 1
          },
          total: 1
        }
      }
    }
    // userUsedEarnrule is object but not have matching communityId
    else if (
      typeof EarnRule?.userUseEarnrule === 'object' &&
      EarnRule?.userUseEarnrule !== null &&
      !Object.keys(EarnRule?.userUseEarnrule).includes(communityId as string)
    ) {
      const usedEarnrule = EarnRule?.userUseEarnrule as Prisma.JsonObject

      usedEarnrule[communityId] = {
        user: {
          [userId]: 1
        },
        total: 1
      }

      userUsedEarnrule = usedEarnrule
    }

    // userUsedEarnrule is object and have matching communityId
    else if (
      typeof EarnRule?.userUseEarnrule === 'object' &&
      EarnRule?.userUseEarnrule !== null &&
      Object.keys(EarnRule?.userUseEarnrule).includes(communityId as string)
    ) {
      const frequency = EarnRule?.frequency.right as number

      const usedEarnrule = EarnRule?.userUseEarnrule as Prisma.JsonObject

      const community = usedEarnrule[communityId as string] as Prisma.JsonObject

      const user = community?.user as Prisma.JsonObject

      if (community.total === frequency) {
        res.status(400).json({ message: 'community use earnrule at limit' })
        return
      } else {
        if (
          user &&
          Object.keys(user).includes(userId as string) &&
          user &&
          typeof user[userId as string] === 'number'
        ) {
          user[userId as string] = (user[userId as string] as number) + 1
        } else {
          user[userId as string] = 1
        }

        community.total = Object.values(
          community.user as Prisma.JsonObject
        ).reduce((acc, count) => (acc as number) + (count as number), 0)

        userUsedEarnrule = usedEarnrule
      }
    }

    await prisma.earnrule.update({
      where: {
        id: earnruleId
      },
      data: {
        userUseEarnrule: userUsedEarnrule
      }
    })

    res.status(200).json({ message: 'updated user use earnrule' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

//TODO: Learn Promise all
//Create a new route
//-> find the earnrule that should be updated by finding the one that the nextupdate time is lesser than the current time -> result is array
//-> then get when is the nextupdate earnrule to update nextupdate earnrule depending on frequency
//---> use array transaction
//-> output: Earnrule name, frequency, nextupdateearnrule

export async function userUseEarnRuleReset(req: Request, res: Response) {
  try {
    const currentTime = new Date()
    const earnrules = await prisma.earnrule.findMany({
      where: {
        nextUpdateEarnrule: {
          lte: currentTime
        }
      }
    })
    if (earnrules.length === 0) {
      res.status(400).json({ message: 'no earnrule to reset' })
      return
    }

    earnrules.map((earnrule) => {
      const frequency = earnrule.frequency.frequency as string
      const nextUpdateEarnrule = earnrule.nextUpdateEarnrule as Date

      switch (frequency) {
        case 'DAILY':
          nextUpdateEarnrule.setDate(nextUpdateEarnrule.getDate() + 1)
          break
        case 'WEEKLY':
          nextUpdateEarnrule.setDate(nextUpdateEarnrule.getDate() + 7)
          break
        case 'MONTHLY':
          nextUpdateEarnrule.setFullYear(
            nextUpdateEarnrule.getFullYear(),
            nextUpdateEarnrule.getMonth() + 1,
            0
          )
          break
      }

      const nextUpdate = prisma.earnrule.update({
        where: {
          id: earnrule.id
        },
        data: {
          nextUpdateEarnrule: nextUpdateEarnrule
        }
      })

      const resetUserUseEarnrule = prisma.earnrule.update({
        where: {
          id: earnrule.id
        },
        data: {
          userUseEarnrule: {}
        }
      })

      return prisma.$transaction([nextUpdate, resetUserUseEarnrule])
    })
    res.status(200).json({ message: 'reset user use earnrule' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
