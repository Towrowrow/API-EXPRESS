import dotenv from "dotenv"
import express from "express"
import mongoose from 'mongoose'
import { catController } from './Controllers/catController.js'
import { dogController } from './Controllers/dogController.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())


app.use('/cat',catController)
app.use('/dog',dogController)


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})