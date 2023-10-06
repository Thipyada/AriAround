import express, { Application, Request, Response } from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import userRouter from './routes/user.router'
import organizationRouter from './routes/organization.router'
import adminRouter from './routes/admin.router'
import earnRuleRouter from './routes/earnrule.router'
import communityRouter from './routes/community.router'
import shopRouter from './routes/shop.router'

const PORT = 8080

const app: Application = express()

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())

// http://localhost:8080/test

//middleware

//Routes
app.use('/api/shop', shopRouter)
app.use('/api/community', communityRouter)
app.use('/api/earnrule', earnRuleRouter)
app.use('/api/user', userRouter)
app.use('/api/organization', organizationRouter)
app.use('/api/admin', adminRouter)

// run yarn start
app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Core API is running on ${PORT}`)
})
