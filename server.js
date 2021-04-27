import dotenv from "dotenv"
import express from "express"
import mongoose from 'mongoose'
import routes from './routes/routes.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})