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

    const EarnRule = await prisma.earnrule.findUnique({
      where: {
        id: earnruleId
      }
    })
    if (!shop) {
      res.status(400).json({ message: 'shop not found' })
      return
    }
    if (!EarnRule) {
      res.status(400).json({ message: 'earnrule not found' })
      return
    }
    if (!shop.earnruleIds?.includes(earnruleId)) {
      res.status(400).json({ message: 'earnrule not found in shop' })
      return
    }

    const communityId = shop?.communityId as string
    const frequency = EarnRule?.frequency.right as number
    let userUsedEarnrule = EarnRule.userUseEarnrule as Prisma.JsonObject

    // userUsedEarnrule is null or not object
    if (
      typeof userUsedEarnrule !== 'object' ||
      userUsedEarnrule === null ||
      !Object.keys(userUsedEarnrule).includes(communityId)
    ) {
      userUsedEarnrule[communityId] = {
        user: {
          [userId]: 1
        },
        total: 1
      }
    }
    // userUsedEarnrule has matching communityId
    else if (Object.keys(userUsedEarnrule).includes(communityId)) {
      const usedEarnrule = userUsedEarnrule as Prisma.JsonObject
      const community = usedEarnrule[communityId] as Prisma.JsonObject
      const user = community?.user as Prisma.JsonObject

      if (community.total === frequency) {
        return res
          .status(400)
          .json({ message: 'community use earnrule at limit' })
      } else {
        if (user && Object.keys(user).includes(userId)) {
          user[userId] = (user[userId] as number) + 1
        } else {
          user[userId] = 1
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

    earnrules.forEach((earnrule) => {
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
            1
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
