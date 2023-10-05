import express from 'express'
import { remultExpress } from 'remult/remult-express'
import { Task } from '../frontend/Task'

export const app = express()
const api = remultExpress({ entities: [Task] })
app.use(api)
