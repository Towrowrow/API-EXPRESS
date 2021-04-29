import mongoose from 'mongoose'

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowerCase:true
    },
    age: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) {
                throw new Error('Dog must be older than 0')
            }
        }
    }
})

const Dog = mongoose.model('Dog', DogSchema)

export default Dog