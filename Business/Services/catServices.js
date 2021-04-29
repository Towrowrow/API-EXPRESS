import CatModel from '../../Data/models/catModel.js'

export default class CatService {

    async getAllCat(){
        const cats = await CatModel.find({})
        return cats
    }

    async getCat(id){
        const cat = await CatModel.find({ _id: id })
        return cat
    }

    async addCat(cat){
        const newCat = new CatModel(cat)
        await newCat.save()
        return newCat
    }

    async updateCat(id, cat){
        const updatedCat = await CatModel
            .findByIdAndUpdate(
                id,
                cat,
                { new: true }
            )
        await updatedCat.save()
        return updatedCat
    }
    async removeCat(id){

        const cat = await CatModel.findByIdAndDelete(id)
        if (!cat) {
            return null
        }
        return cat
    }

}