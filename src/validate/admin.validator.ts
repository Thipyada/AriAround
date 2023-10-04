import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

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

export default function ValidateAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
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
