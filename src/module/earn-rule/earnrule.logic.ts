import { Frequency, Period, ResultType } from '@prisma/client'
import { z } from 'zod'
import { earnRuleSchema } from './earnrule.router'

type earnRuleScheme = z.infer<typeof earnRuleSchema>

export function newEarnRule(data: earnRuleScheme) {
  return earnRuleSchema.parse(data)
}
