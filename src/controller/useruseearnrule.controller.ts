import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

//user use earnrule @ shop

export async function userUseEarnRule(req: Request, res: Response) {
  try {
    const { id } = req.params
    const transaction = await prisma.transaction.findFirst({
      where: {
        userId: id
      }
    })
    const userId = transaction?.userId as string

    //need to be JSON
    await prisma.earnrule.update({
      where: {
        id: transaction?.earnruleId
      },
      data: {
        userUseEarnrule: {
          toJSON: {
            communityId: transaction?.communityId,
            user: {
              userId: userId,
              totalUsed: 1
            },
            total: 1
          }
        }
      }
    })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
