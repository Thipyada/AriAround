import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import { Router } from 'express'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

const adminSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  profilePic: z.string().optional(),
  phone: z.string().optional(),
  permissions: z.array(
    z.object({
      feature: z.string(),
      show: z.boolean(),
      permissionFeature: z.string()
    })
  )
})

function ValidateAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((admin) => {
        adminSchema.parse(admin)
      })
    } else {
      adminSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}

// GET all + query
router.get('/', async (req: Request, res: Response) => {
  try {
    const { name, email } = req.query
    const where: Record<string, unknown> = {}

    if (name) {
      const adminName = {
        contains: name as string,
        mode: 'insensitive'
      }
      where.name = adminName
    }
    if (email) {
      const adminEmail = {
        contains: email as string,
        mode: 'insensitive'
      }
      where.email = adminEmail
    }
    const admins = await prisma.admin.findMany({
      where: where
    })

    if (!admins) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
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
router.post('/', ValidateAdmin, async (req: Request, res: Response) => {
  try {
    if (Array.isArray(req.body)) {
      await prisma.admin.createMany({
        data: req.body
      })
      res.status(200).json({ message: 'admins Created' })
    } else {
      await prisma.admin.create({
        data: {
          ...req.body
        }
      })
      res.status(200).json({ message: 'admin Created' })
    }
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
})

// PUT
router.put('/:id', ValidateAdmin, async (req: Request, res: Response) => {
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
