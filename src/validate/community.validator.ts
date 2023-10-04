import { NextFunction, Response, Request } from 'express'
import { z } from 'zod'

const communitySchema = z.object({
  thaiName: z.string(),
  englishName: z.string(),
  founded: z.string(),
  updated: z.string(),
  active: z.boolean(),
  description: z.string().optional(),
  owner: z.string(),
  shop: z.string().array()
})

export default function ValidateCommunity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((community) => {
        communitySchema.parse(community)
      })
    } else {
      communitySchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
  }
}
