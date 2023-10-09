import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function transaction(req: Request, res: Response) {
  try {
    const { id, shopId, earnruleId } = req.params
    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId
      }
    })

    const communityId = shop?.communityId as string

    const transaction = await prisma.transaction.create({
      data: {
        shopId: shopId,
        communityId: communityId,
        earnruleId: earnruleId,
        userId: id
      }
    })
    res.status(200).json({ data: transaction })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
