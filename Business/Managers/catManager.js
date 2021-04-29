import CatService from '../Services/catServices.js'


//Read All
export const getCats = async (req, res) => {
    const cats = await CatService.getAllCat()
    res.send(cats)
}

//Read One
export const getCatById = async (req, res) => {
    const cat = await CatService.getCat(req.params.id)
    res.send(cat)
}
//ADD 
export const addCat = async (req, res) => {
    const cat = CatService.addCat(req.body)
    res.send(cat)
}
//Update
export const updateCat = async (req, res) => {
    const cat = await CatService.updateCat(req.params.id,req.body)
    res.send(cat)
}
//DELETE
export const removeCat = async (req, res) => {

    const cat = await CatService.removeCat(req.params.id)
    if (!cat) {
        res.status(404).send('Item not found')
    }
    res.status(200).send(`${req.params.id} deleted`)
}