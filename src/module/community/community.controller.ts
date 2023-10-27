import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { PrismaHelper } from '../../utils'
import { newCommunity } from './community.logic'

const prisma = new PrismaClient()

const db = prisma.community

const getQuery = (req: Request) => {
  const { thaiName, englishName } = req.query
  const initQuery = <Prisma.CommunityFindManyArgs>PrismaHelper.handleQuery(req)
  const query = PrismaHelper.initWhereQuery(initQuery, [
    'thaiName',
    'englishName'
  ])
  if (thaiName) {
    query.where.name = {
      contains: thaiName as string,
      mode: 'insensitive'
    }
  }

  if (englishName) {
    query.where.email = {
      contains: englishName as string,
      mode: 'insensitive'
    }
  }
  return query
}

// export async function getAllCommunities(req: Request, res: Response) {
//   try {
//     const { thaiName, englishName } = req.query
//     const where: Record<string, unknown> = {}

//     if (thaiName) {
//       const communityThaiName = {
//         contains: thaiName as string,
//         mode: 'insensitive'
//       }
//       where.thaiName = communityThaiName
//     }
//     if (englishName) {
//       const communityEnglishName = {
//         contains: englishName as string,
//         mode: 'insensitive'
//       }
//       where.englishName = communityEnglishName
//     }

//     const communities = await prisma.community.findMany({
//       where: where,
//       include: {
//         earnrule: true
//       }
//     })

//     if (!communities) {
//       res.status(404).json({ message: 'Not found' })
//       return
//     }
//     res.status(200).json({ data: communities })
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function getAllCommunities(req: Request, res: Response) {
  try {
    const query = getQuery(req)
    const data = await prisma.community.findMany(query)
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ message: 'Get Fail', error })
  }
}

export async function getCommunityById(req: Request, res: Response) {
  try {
    const community = await prisma.community.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!community) {
      res.status(404).json({ message: 'Not found' })
      return
    }
    res.status(200).json({ data: community })
  } catch (error) {
    res.status(400).json({ message: 'Get by id fail', error })
  }
}

// export async function createCommunity(req: Request, res: Response) {
//   try {
//     if (Array.isArray(req.body)) {
//       await prisma.community.createMany({
//         data: req.body
//       })
//       res.status(200).json({ message: 'Communities Created' })
//       return
//     } else {
//       await prisma.community.create({
//         data: {
//           ...req.body
//         }
//       })
//       res.status(200).json({ message: 'Community Created' })
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function createCommunity(req: Request, res: Response) {
  try {
    const data = await db.create({
      data: {
        ...newCommunity(req.body)
      }
    })

    res.status(200).json({ message: 'community Created', data })
  } catch (error) {
    res.status(400).json({ message: 'create fail', error })
  }
}

export async function updateCommunity(req: Request, res: Response) {
  try {
    const community = await prisma.community.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!community) {
      res.status(404).json({ message: 'Not found' })
      return
    }

    await prisma.community.update({
      where: {
        id: req.params.id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'Community Updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function addCommunityEarnrule(req: Request, res: Response) {
  try {
    const community = await prisma.community.findUnique({
      where: {
        id: req.params.id
      }
    })

    //Check if earnrule exist in earnrule
    const earnrule = await prisma.earnrule.findMany({
      where: {
        id: {
          in: req.body.earnruleIds
        }
      }
    })

    //Check if earnrule exist in community
    const earnruleInCommunity = community?.earnruleIds
    const checkEarnrule = req.body.earnruleIds.some((val: string) =>
      earnruleInCommunity?.includes(val)
    )

    if (!community) {
      res.status(404).json({ message: 'Community Not Found' })
      return
    }

    if (earnrule.length !== req.body.earnruleIds.length) {
      res.status(404).json({ message: 'Earnrule nit exist' })
      return
    }

    if (checkEarnrule) {
      res.status(400).json({ message: 'Earnrule already exist' })
      return
    }

    await prisma.community.update({
      where: {
        id: req.params.id
      },
      data: {
        earnruleIds: {
          push: req.body.earnruleIds
        }
      }
    })

    res.status(200).json({ message: 'Community Earnrule Added' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function deleteCommunity(req: Request, res: Response) {
  try {
    const community = await prisma.community.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!community) {
      res.status(404).json({ message: 'Not found' })
      return
    }

    await prisma.community.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'Community Deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
