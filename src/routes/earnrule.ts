import { Router } from 'express'
import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

const earnRuleSchema = z.object({
  name: z.string(),
  type: z.string(),
  period: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  picture: z.string(),
  frequency: z.object({
    right: z.number(),
    frequency: z.string()
  }),
  setting: z.object({
    resultType: z.string(),
    value: z.object({
      amount: z.number(),
      coin: z.number()
    })
  }),
  active: z.boolean()
})

function ValidateEarnRule(req: Request, res: Response, next: NextFunction) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((earnRule) => {
        earnRuleSchema.parse(earnRule)
      })
    } else {
      earnRuleSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}

// GET all + query by type + name + active
router.get('/', async (req: Request, res: Response) => {
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
})

// GET by id
router.get('/:id', async (req: Request, res: Response) => {
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
})

// POST
router.post('/', ValidateEarnRule, async (req: Request, res: Response) => {
  console.log(req.body)
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
})

// PUT
router.put('/:id', ValidateEarnRule, async (req: Request, res: Response) => {
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
})

// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
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
})

export default router
