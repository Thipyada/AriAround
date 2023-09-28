import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

// GET /api/permissions
// router.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const permissions = await prisma.permission.findMany()
//     res.status(200).json({ data: permissions })
//   } catch (error) {
//     res.status(400).json({ message: 'error', error })
//   }
// })

// GET /api/permissions/:id

// POST /api/permissions

// PUT /api/permissions/:id

// DELETE /api/permissions/:id

export default router
