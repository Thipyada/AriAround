import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

const organizationSchema = z.object({
  name: z.string(),
  Instagram: z.string().optional(),
  Facebook: z.string().optional(),
  type: z.string(),
  status: z.string()
})

export default function ValidateOrganization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (Array.isArray(req.body)) {
      req.body.forEach((organization) => {
        organizationSchema.parse(organization)
      })
    } else {
      organizationSchema.parse(req.body)
    }
    next()
  } catch (error) {
    res.status(400).json({ message: 'error', error })
    return
  }
}
