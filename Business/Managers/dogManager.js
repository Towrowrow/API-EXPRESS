import DogServices from "../Services/dogServices.js";

const _dogServices = new DogServices();
//Read All
export const getDogs = async (req, res) => {
  const dogs = await _dogServices.getAllDogs();
  res.send(dogs);
};
//Read One
export const getDogById = async (req, res) => {
  const dog = await _dogServices.getDog(req.params.id);
  res.send(dog);
};
//ADD
export const addDog = async (req, res) => {
  const dog = await _dogServices.addDog(req.body);
  res.send(dog);
};
//Update
export const updateDog = async (req, res) => {
  const dog = await _dogServices.updateDog(req.params.id, req.body);
  res.send(dog);
};
//DELETE
export const removeDog = async (req, res) => {
  const dog = await _dogServices.removeDog(req.params.id);
  if (!dog) {
    res.status(404).send("Item not found");
  }
  res.status(200).send(`${req.params.id} deleted`);
};
