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

type earnRuleScheme = z.infer<typeof earnRuleSchema>

export function newEarnRule(data: earnRuleScheme) {
  return earnRuleSchema.parse(data)
}
