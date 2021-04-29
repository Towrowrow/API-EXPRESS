import DogModel from '../../Data/models/dogModel.js'

export default class DogServices {

        async getAllDogs() {
            const dogs = await DogModel.find({})
            return dogs
    }
    
    async getDog(id) {
        const dog = await DogModel.find({ _id: id })
        return dog
    }

    async addDog(dog) {
        const newDog = new DogModel(dog)
        await newDog.save()
        return newDog
    }

    async updateDog(id, dog) {
        const updatedDog = await DogModel.findByIdAndUpdate(id,dog,{new:true})
        await updatedDog.save()
        return updatedDog
    }

    async removeDog(id) {
        const dog = await DogModel.findByIdAndDelete(id)
        if (!dog) {
            return null
        }
        return dog
    }
}

