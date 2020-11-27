import * as dotenv from 'dotenv'

import express from 'express'
import linksRouter from './routes/links'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(linksRouter)

export default app



