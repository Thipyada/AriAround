import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const userSchema = z.object({
  name: z.string(),
  organizationId: z.string(),
  status: z.string().optional()
})

export default function ValidateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((user) => {
        userSchema.parse(user)
      })
    } else {
      userSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}
