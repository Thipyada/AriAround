import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getAllAdmins(req: Request, res: Response) {
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
}

export async function getAdminById(req: Request, res: Response) {
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
}

export async function createAdmin(req: Request, res: Response) {
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
}

export async function updateAdmin(req: Request, res: Response) {
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
}

export async function deleteAdmin(req: Request, res: Response) {
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
}
