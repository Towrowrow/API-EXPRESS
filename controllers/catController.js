import CatModel from '../models/catModel.js'



//Read All
export const getCats = async (req, res) => {
    const cats = await CatModel.find({})
    res.send(cats)
}

//Read One
export const getCatById = async (req, res) => {
    const cat = await CatModel.find({_id : req.params.id})
    res.send(cat)
}
//ADD 
export const addCat = async (req, res) => {
    const cat = new CatModel(req.body)
    await cat.save()
    res.send(cat)
}
//Update
export const updateCat = async (req, res) => {
    //Pass {new :true} option on FBIAU for get update one entity, default:False.
    const cat = await CatModel
        .findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    await cat.save()
    res.send(cat)
}
//DELETE
export const removeCat = async (req, res) => {
    const cat = await CatModel.findByIdAndDelete(req.params.id)
    if (!cat) {
        res.status(404).send('Item not found')
    }
    res.status(200).send(`${req.params.id} deleted`)
}