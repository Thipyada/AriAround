import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      include: {
        earnrule: true
      }
    })
    res.status(200).json({ data: users })
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
    if (Array.isArray(req.body)) {
      await prisma.user.createMany({
        data: req.body
      })
      res.status(200).json({ message: 'users Created' })
      return
    } else {
      await prisma.user.create({
        data: {
          ...req.body
        }
      })
      res.status(200).json({ message: 'user Created' })
    }
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

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
