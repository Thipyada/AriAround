import { Router } from 'express'
import * as earnruleController from './earnrule.controller'
import { userUseEarnRuleReset } from '../common/useruseearnrule.controller'
import { validatorInput } from '../../middleware/validatorInput'
import { z } from 'zod'
import { Frequency, Period, ResultType } from '@prisma/client'

export const earnRuleSchema = z.object({
  name: z.string(),
  type: z.string(),
  period: z.nativeEnum(Period),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  picture: z.string(),
  frequency: z.object({
    right: z.number(),
    frequency: z.nativeEnum(Frequency)
  }),
  setting: z.object({
    resultType: z.nativeEnum(ResultType),
    value: z.object({
      amount: z.number(),
      coin: z.number()
    })
  }),
  active: z.boolean()
})

const router = Router()

router.get('/', earnruleController.getAllEarnrules)
router.get('/:id', earnruleController.getEarnruleById)
router.post(
  '/',
  validatorInput(earnRuleSchema),
  earnruleController.createEarnrule
)
router.put('/reset-used-earnrule', userUseEarnRuleReset)
router.put(
  '/:id',
  validatorInput(earnRuleSchema),
  earnruleController.updateEarnrule
)
router.delete('/:id', earnruleController.deleteEarnrule)

export default router
