import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

//user use earnrule @ shop

export async function userUseEarnRule(req: Request, res: Response) {
  try {
    const { id, shopId, earnruleId } = req.params
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
            [id]: 1
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
          [id]: 1
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
      const usedEarnrule = EarnRule?.userUseEarnrule as Prisma.JsonObject

      const community = usedEarnrule[communityId as string] as Prisma.JsonObject

      const user = community?.user as Prisma.JsonObject

      if (
        user &&
        Object.keys(user).includes(id as string) &&
        user &&
        typeof user[id as string] === 'number'
      ) {
        user[id as string] = (user[id as string] as number) + 1
      } else {
        user[id as string] = 1
      }

      community.total = Object.values(
        community.user as Prisma.JsonObject
      ).reduce((acc, count) => (acc as number) + (count as number), 0)

      userUsedEarnrule = usedEarnrule
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
