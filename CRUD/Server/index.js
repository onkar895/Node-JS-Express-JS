import express from 'express'
import Connection from './database/db.js'
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())
app.use('/', userRoutes)

Connection()
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
