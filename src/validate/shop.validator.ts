import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const shopSchema = z.object({
  name: z.string(),
  communityId: z.string()
})

export default function ValidateShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((shop) => {
        shopSchema.parse(shop)
      })
    } else {
      shopSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}
