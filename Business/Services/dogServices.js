import DogModel from "../../Data/models/dogModel.js";

export default class DogServices {
  static async getAllDogs() {
    const dogs = await DogModel.find({});
    return dogs;
  }

  static async getDog(id) {
    const dog = await DogModel.find({ _id: id });
    return dog;
  }

  static async addDog(dog) {
    const newDog = new DogModel(dog);
    await newDog.save();
    return newDog;
  }

  static async updateDog(id, dog) {
    const updatedDog = await DogModel.findByIdAndUpdate(id, dog, { new: true });
    await updatedDog.save();
    return updatedDog;
  }

  static async removeDog(id) {
    const dog = await DogModel.findByIdAndDelete(id);
    if (!dog) {
      return null;
    }
    return dog;
  }
}

// module.exports = DogServices
