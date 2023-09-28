import express, { Application, Request, Response } from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import permissionRouter from './routes/permission'

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
app.get('/permission', permissionRouter)

// run yarn start
app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Core API is running on ${PORT}`)
})
