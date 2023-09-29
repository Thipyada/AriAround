import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

// GET all
router.get('/', async (req: Request, res: Response) => {
  try {
    const admins = await prisma.admin.findMany({
      include: {
        permissions: true
      }
    })
    res.status(200).json({ data: admins })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// GET by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!admin) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: admin })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// POST
router.post('/', async (req: Request, res: Response) => {
  console.log('body', req.body)
  try {
    const { name, email, profilePic, phone, permissions } = req.body
    await prisma.admin.create({
      data: {
        name: name,
        email: email,
        profilePic: profilePic,
        phone: phone,
        permissions: {
          set: permissions
        }
      }
    })
    res.status(201).json({ message: 'admin Created' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// PUT
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!admin) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.admin.update({
      where: {
        id: req.params.id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'admin Updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!admin) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.admin.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'admin Deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

export default router
