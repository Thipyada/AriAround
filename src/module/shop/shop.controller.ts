import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { PrismaHelper } from '../../utils'
import { newShop } from './shop.logic'

const prisma = new PrismaClient()

const db = prisma.shop

const getQuery = (req: Request) => {
  const { name } = req.query
  const initQuery = <Prisma.ShopFindManyArgs>PrismaHelper.handleQuery(req)
  const query = PrismaHelper.initWhereQuery(initQuery, ['name'])
  if (name) {
    query.where.name = {
      contains: name as string,
      mode: 'insensitive'
    }
  }

  return query
}
// export async function getAllShops(req: Request, res: Response) {
//   try {
//     const { name } = req.query
//     const where: Record<string, unknown> = {}
//     if (name) {
//       const shopName = {
//         contains: name as string,
//         mode: 'insensitive'
//       }
//       where.name = shopName
//     }
//     const shops = await prisma.shop.findMany({
//       where: where,
//       include: {
//         earnrule: true
//       }
//     })

//     if (!shops) {
//       res.status(404).json({ message: 'Not Found' })
//       return
//     }
//     res.status(200).json({ data: shops })
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function getAllShops(req: Request, res: Response) {
  try {
    const query = getQuery(req)
    const data = await prisma.shop.findMany(query)
    res.status(200).json({ data })
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
    const data = await db.create({
      data: {
        ...newShop(req.body)
      }
    })

    res.status(200).json({ message: 'community Created', data })
  } catch (error) {
    res.status(400).json({ message: 'create fail', error })
  }
}
// export async function createShop(req: Request, res: Response) {
//   try {
//     if (Array.isArray(req.body)) {
//       await prisma.shop.createMany({
//         data: req.body
//       })
//       res.status(200).json({ message: 'Created' })
//       return
//     } else {
//       await prisma.shop.create({
//         data: req.body
//       })
//       res.status(200).json({ message: 'Created' })
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

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
    const { earnruleIds } = req.body
    const shop = await prisma.shop.findUnique({
      where: {
        id: req.params.id
      }
    })

    const earnruleInShop = shop?.earnruleIds
    //check if some element in earnruleInshop match with any earnruleIds
    const checkShop = earnruleIds.some((val: string) => {
      return earnruleInShop?.includes(val)
    })

    //check if earnrule exist in community
    const community = await prisma.community.findUnique({
      where: {
        id: shop?.communityId
      }
    })
    const earnruleInCommunity = community?.earnruleIds
    //check if some element in earnruleInCommunity all match with earnruleIds
    const checkCommunity = earnruleIds.every((val: string) => {
      return earnruleInCommunity?.includes(val)
    })

    if (!shop) {
      res.status(404).json({ message: 'Not Found' })
      return
    }

    if (!checkCommunity) {
      res.status(400).json({ message: 'Earnrule not exist in community' })
      return
    }

    if (checkShop) {
      res.status(400).json({ message: 'Earnrule already exist in shop' })
      return
    }

    await prisma.shop.update({
      where: {
        id: req.params.id
      },
      data: {
        earnruleIds: {
          push: earnruleIds
        }
      }
    })
    res.status(200).json({ message: 'Earnrule added to Shop' })
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
