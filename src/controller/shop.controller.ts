import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getAllShops(req: Request, res: Response) {
  try {
    const { name } = req.query
    const where: Record<string, unknown> = {}
    if (name) {
      const shopName = {
        contains: name as string,
        mode: 'insensitive'
      }
      where.name = shopName
    }
    const shops = await prisma.shop.findMany({
      where: where
    })

    if (!shops) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: shops })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function getShopById(req: Request, res: Response) {
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!shop) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: shop })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function createShop(req: Request, res: Response) {
  try {
    if (Array.isArray(req.body)) {
      await prisma.shop.createMany({
        data: req.body
      })
      res.status(200).json({ message: 'Created' })
      return
    } else {
      await prisma.shop.create({
        data: req.body
      })
      res.status(200).json({ message: 'Created' })
    }
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function updateShop(req: Request, res: Response) {
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!shop) {
      res.status(404).json({ message: 'Not Found' })
      return
    }

    await prisma.shop.update({
      where: {
        id: req.params.id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'Updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function addEarnruleToShop(req: Request, res: Response) {
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!shop) {
      res.status(404).json({ message: 'Not Found' })
      return
    }

    const earnrule = await prisma.shopEarnrule.findMany({
      where: {
        shopId: req.params.id,
        earnruleId: {
          in: req.body.earnruleId
        }
      }
    })

    if (earnrule.length > 0) {
      res.status(400).json({ message: 'Already Exist' })
      return
    }

    await prisma.shopEarnrule.createMany({
      data: req.body.earnruleId.map((earnruleId: string) => ({
        shopId: req.params.id,
        earnruleId: earnruleId
      }))
    })
    res.status(200).json({ message: 'earnrules added to shop' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function deleteShop(req: Request, res: Response) {
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!shop) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.shop.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'Deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
