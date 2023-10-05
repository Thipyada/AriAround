import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getAllOrganizations(req: Request, res: Response) {
  try {
    const { name, type, status } = req.query
    const where: Record<string, unknown> = {}
    if (name) {
      const organizationName = {
        contains: name as string,
        mode: 'insensitive'
      }
      where.name = organizationName
    }
    if (type) {
      const organizationType = {
        contains: type as string,
        mode: 'insensitive'
      }
      where.type = organizationType
    }
    if (status) {
      const organizationStatus = {
        contains: status as string,
        mode: 'insensitive'
      }
      where.status = organizationStatus
    }
    const organizations = await prisma.organization.findMany({
      where: where,
      include: {
        users: true
      }
    })
    if (!organizations) {
      res.status(404).json({ message: 'Not Found' })
      return
    }
    res.status(200).json({ data: organizations })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

export async function getOrganizationById(req: Request, res: Response) {
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
}

export async function createOrganization(req: Request, res: Response) {
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
}

export async function updateOrganization(req: Request, res: Response) {
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
}

export async function deleteOrganization(req: Request, res: Response) {
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
}