import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

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

export default function ValidateEarnRule(
  req: Request,
  res: Response,
  next: NextFunction
) {
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
