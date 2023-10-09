import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const transactionSchema = z.object({
  shopId: z.string(),
  communityId: z.string(),
  earnruleId: z.string()
})

export default function ValidateTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((transaction) => {
        transactionSchema.parse(transaction)
      })
    } else {
      transactionSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}
