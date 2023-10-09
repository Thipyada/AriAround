import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllEarnrules(req: Request, res: Response) {
  try {
    const { name, type, active } = req.query
    const where: Record<string, unknown> = {}
    if (name) {
      const earnRuleName = {
        contains: name as string,
        mode: 'insensitive'
      }
      where.name = earnRuleName
    }
    if (type) {
      const earnRuleType = {
        contains: type as string,
        mode: 'insensitive'
      }
      where.type = earnRuleType
    }
    if (active) {
      const earnRuleActive = active
      where.active = earnRuleActive
    }

    const earnRules = await prisma.earnrule.findMany({
      where: where
    })
    if (!earnRules) {
      res.status(404).json({ message: 'error', error: 'earnRules not found' })
      return
    }
    res.status(200).json({ data: earnRules })
  } catch (error) {
    res.status(400).json({ message: 'error', error })
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
    if (Array.isArray(req.body)) {
      await prisma.earnrule.createMany({
        data: req.body
      })
      res.status(200).json({ message: 'Earnrules created' })
      return
    } else {
      await prisma.earnrule.create({
        data: {
          ...req.body
        }
      })
      res.status(200).json({ message: 'Earnrule created' })
    }
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}

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
