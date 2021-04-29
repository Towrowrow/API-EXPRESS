import DogModel from '../models/dogModel.js'



//Read All
export const getDogs = async (req, res) => {
    const dogs = await DogModel.find({})
    res.send(dogs)
}
//Read One
export const getDogById = async (req, res) => {
    const dog = await DogModel.find({_id : req.params.id})
    res.send(dog)
}
//ADD 
export const addDog = async (req, res) => {
    const dog = new DogModel(req.body)
    await dog.save()
    res.send(dog)
}
//Update
export const updateDog = async (req, res) => {
    //Pass {new :true} option on FBIAU for get update one entity, default:False.
    const dog = await DogModel
        .findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    await dog.save()
    res.send(dog)
}
//DELETE
export const removeDog = async (req, res) => {
    const dog = await DogModel.findByIdAndDelete(req.params.id)
    if (!dog) {
        res.status(404).send('Item not found')
    }
    res.status(200).send(`${req.params.id} deleted`)
}