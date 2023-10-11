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

//user use earnrule @ shop

export async function userUseEarnRuleReset(req: Request, res: Response) {
  try {
    //set reset time @ 23:59:59
    const resetTime = new Date()
    resetTime.setHours(22, 59, 59, 99)

    const currentTime = new Date()

    //check if time at the moment exceed reset time
    if (currentTime.getTime() < resetTime.getTime()) {
      res.status(400).json({ message: 'time not exceed' })
      return
    }

    //if exceed reset time, reset user use earnrule
    await prisma.earnrule.updateMany({
      // where: {
      //   frequency: {
      //     frequency: 'DAILY'
      //   }
      // },
      data: {
        userUseEarnrule: {}
      }
    })

    res.status(200).json({ message: 'reset user use earnrule' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
