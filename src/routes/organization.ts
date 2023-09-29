import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

// GET all
router.get('/', async (req: Request, res: Response) => {
  try {
    const organizations = await prisma.organization.findMany({
      include: {
        users: true
      }
    })
    res.status(200).json({ data: organizations })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// GET by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const organization = await prisma.organization.findUnique({
      where: {
        id: req.params.id
      },
      include: {
        users: true
      }
    })
    if (!organization) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: organization })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// POST
router.post('/', async (req: Request, res: Response) => {
  console.log('body', req.body)
  try {
    if (Array.isArray(req.body)) {
      await prisma.organization.createMany({
        data: req.body
      })
      res.status(200).json({ message: 'Organizations Created' })
      return
    } else {
      await prisma.organization.create({
        data: {
          ...req.body
        }
      })
      res.status(200).json({ message: 'Organization Created' })
    }
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// PUT
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const organization = await prisma.organization.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!organization) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.organization.update({
      where: {
        id: req.params.id
      },
      data: {
        ...req.body
      }
    })
    res.status(200).json({ message: 'Organization Updated' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const organization = await prisma.organization.findUnique({
      where: {
        id: req.params.id
      }
    })
    if (!organization) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    await prisma.organization.delete({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'Organization Deleted' })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

export default router