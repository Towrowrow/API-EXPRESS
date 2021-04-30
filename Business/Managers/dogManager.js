import DogServices from "../Services/dogServices.js";

//Read All
export const getDogs = async (req, res) => {
  const dogs = await DogServices.getAllDogs();
  res.send(dogs);
};
//Read One
export const getDogById = async (req, res) => {
  const dog = await DogServices.getDogById(req.params.id);
  res.send(dog);
};
//ADD
export const addDog = async (req, res) => {
  const dog = await DogServices.addDog(req.body);
  res.send(dog);
};
//Update
export const updateDog = async (req, res) => {
  const dog = await DogServices.updateDog(req.params.id, req.body);
  res.send(dog);
};
//DELETE
export const removeDog = async (req, res) => {
  const dog = await DogServices.removeDog(req.params.id);
  if (!dog) {
    res.status(404).send("Item not found");
  }
  res.status(200).send(`${req.params.id} deleted`);
};
