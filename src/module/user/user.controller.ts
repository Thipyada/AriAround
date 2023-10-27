import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { PrismaHelper } from '../../utils'
import { newUser } from './user.logic'

const prisma = new PrismaClient()

const db = prisma.user

const getQuery = (req: Request) => {
  const { name } = req.query
  const initQuery = <Prisma.UserFindManyArgs>PrismaHelper.handleQuery(req)
  const query = PrismaHelper.initWhereQuery(initQuery, ['name'])
  if (name) {
    query.where.name = {
      contains: name as string,
      mode: 'insensitive'
    }
  }

  return query
}

// export async function getAllUsers(req: Request, res: Response) {
//   try {
//     const { name } = req.query
//     const where: Record<string, unknown> = {}
//     if (name) {
//       const userName = {
//         contains: name as string,
//         mode: 'insensitive'
//       }
//       where.name = userName
//     }

//     const users = await prisma.user.findMany({
//       where: where,
//       include: {
//         earnrule: true
//       }
//     })
//     res.status(200).json({ data: users })
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function getAllUsers(req: Request, res: Response) {
  try {
    const query = getQuery(req)
    const data = await prisma.user.findMany(query)
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!user) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: user })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const data = await db.create({
      data: {
        ...newUser(req.body)
      }
    })

    res.status(200).json({ message: 'community Created', data })
  } catch (error) {
    res.status(400).json({ message: 'create fail', error })
  }
}
// export async function createUser(req: Request, res: Response) {
//   try {
//     if (Array.isArray(req.body)) {
//       await prisma.user.createMany({
//         data: req.body
//       })
//       res.status(200).json({ message: 'users Created' })
//       return
//     } else {
//       await prisma.user.create({
//         data: {
//           ...req.body
//         }
//       })
//       res.status(200).json({ message: 'user Created' })
//     }
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// }

export async function updateUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!user) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.user.update({
      where: {
        id: req.params.id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'user Updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function userAddEarnrule(req: Request, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    })

    const userEarnrules = user?.earnruleIds
    const checkEarnrule = req.body.earnruleIds.some((val: string) =>
      userEarnrules?.includes(val)
    )

    const earnrule = await prisma.earnrule.findMany({
      where: {
        id: {
          in: req.body.earnruleIds
        }
      }
    })

    if (!user) {
      res.status(404).json({ message: 'User is not found' })
      return
    }

    if (earnrule.length !== req.body.earnruleIds.length) {
      res.status(404).json({ message: 'Earn Rule Not Found' })
      return
    }

    if (checkEarnrule) {
      res.status(404).json({ message: 'Earn Rule Already Exist' })
      return
    }

    await prisma.user.update({
      where: {
        id: req.params.id
      },
      data: {
        earnruleIds: {
          push: req.body.earnruleIds
        }
      }
    })
    res.status(200).json({ message: 'Earn rule added to User' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!user) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.user.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'user Deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
