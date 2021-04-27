import CatModel from '../models/catModel.js'

export const getCat = (_, res) => {
    res.send('Get Cat')
}

export const postCat  = (req, res) => {
    res.send('Post Cast')
}

export const addCat = async (req, res) => {
    const cat = new CatModel(req.body)

    try {
        await cat.save()
        res.send(cat)
    } catch (err){
        res.status(500).send(err.message)
    }
}