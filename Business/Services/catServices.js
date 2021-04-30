import CatModel from "../../Data/models/catModel.js";

export default class CatService {
  static async getAllCat() {
    const cats = await CatModel.find({});
    return cats;
  }

  static async getCat(id) {
    const cat = await CatModel.find({ _id: id });
    return cat;
  }

  static async addCat(cat) {
    const newCat = new CatModel(cat);
    await newCat.save();
    return newCat;
  }

  static async updateCat(id, cat) {
    const updatedCat = await CatModel.findByIdAndUpdate(id, cat, { new: true });
    await updatedCat.save();
    return updatedCat;
  }
  static async removeCat(id) {
    const cat = await CatModel.findByIdAndDelete(id);
    if (!cat) {
      return null;
    }
    return cat;
  }
}
