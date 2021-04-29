import dotenv from "dotenv"
import express from "express"
import mongoose from 'mongoose'
import { catRouter } from './routes/catRoute.js'
import { dogRouter } from './routes/dogRoute.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())



app.use('/cat',catRouter)
app.use('/dog',dogRouter)




mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})