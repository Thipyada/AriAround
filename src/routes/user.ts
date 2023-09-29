import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

// GET all
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json({ data: users })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// GET by id
router.get('/:id', async (req: Request, res: Response) => {
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
})

// POST
router.post('/', async (req: Request, res: Response) => {
  console.log('body', req.body)
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
})

// PUT
router.put('/:id', async (req: Request, res: Response) => {
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
})

// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
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
})

export default router
