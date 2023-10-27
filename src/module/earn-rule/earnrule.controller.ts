import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaHelper } from '../../utils'
import { newEarnRule } from './earnrule.logic'

const prisma = new PrismaClient()

const db = prisma.earnrule

const getQuery = (req: Request) => {
  const { name, type } = req.query
  const initQuery = <Prisma.EarnruleFindManyArgs>PrismaHelper.handleQuery(req)
  const query = PrismaHelper.initWhereQuery(initQuery, ['name', 'type'])
  if (name) {
    query.where.name = {
      contains: name as string,
      mode: 'insensitive'
    }
  }

  if (type) {
    query.where.type = {
      contains: type as string,
      mode: 'insensitive'
    }
  }

  return query
}

// export async function getAllEarnrules(req: Request, res: Response) {
//   try {
//     const { name, type, active } = req.query
//     const where: Record<string, unknown> = {}
//     if (name) {
//       const earnRuleName = {
//         contains: name as string,
//         mode: 'insensitive'
//       }
//       where.name = earnRuleName
//     }
//     if (type) {
//       const earnRuleType = {
//         contains: type as string,
//         mode: 'insensitive'
//       }
//       where.type = earnRuleType
//     }
//     if (active) {
//       const earnRuleActive = active
//       where.active = earnRuleActive
//     }

//     const earnRules = await prisma.earnrule.findMany({
//       where: where
//     })
//     if (!earnRules) {
//       res.status(404).json({ message: 'error', error: 'earnRules not found' })
//       return
//     }
//     res.status(200).json({ data: earnRules })
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function getAllEarnrules(req: Request, res: Response) {
  try {
    const query = getQuery(req)
    const data = await prisma.earnrule.findMany(query)
    res.status(200).json({ data })
  } catch (error) {
    console.debug('57 😙 => admin.controller.ts error =', error)
    res.status(400).json({ message: 'get fail', error })
  }
}

export async function getEarnruleById(req: Request, res: Response) {
  try {
    const { id } = req.params
    const earnRule = await prisma.earnrule.findUnique({
      where: {
        id: id
      }
    })
    if (!earnRule) {
      res.status(404).json({ message: 'error', error: 'earnRule not found' })
      return
    }
    res.status(200).json({ data: earnRule })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function createEarnrule(req: Request, res: Response) {
  try {
    const data = await db.create({
      data: {
        ...newEarnRule(req.body)
      }
    })

    res.status(200).json({ message: 'community Created', data })
  } catch (error) {
    res.status(400).json({ message: 'create fail', error })
  }
}
// export async function createEarnrule(req: Request, res: Response) {
//   try {
//     if (Array.isArray(req.body)) {
//       await prisma.earnrule.createMany({
//         data: req.body
//       })
//       res.status(200).json({ message: 'Earnrules created' })
//       return
//     } else {
//       await prisma.earnrule.create({
//         data: {
//           ...req.body
//         }
//       })
//       res.status(200).json({ message: 'Earnrule created' })
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function updateEarnrule(req: Request, res: Response) {
  try {
    const { id } = req.params
    const earnRule = await prisma.earnrule.findUnique({
      where: {
        id: id
      }
    })
    if (!earnRule) {
      res.status(404).json({ message: 'error', error: 'earnRule not found' })
      return
    }
    await prisma.earnrule.update({
      where: {
        id: id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'EarnRule updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function deleteEarnrule(req: Request, res: Response) {
  try {
    const { id } = req.params
    const earnRule = await prisma.earnrule.findUnique({
      where: {
        id: id
      }
    })
    if (!earnRule) {
      res.status(404).json({ message: 'error', error: 'earnRule not found' })
      return
    }
    await prisma.earnrule.delete({
      where: {
        id: id
      }
    })
    res.status(200).json({ message: 'EarnRule deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
