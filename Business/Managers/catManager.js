import CatService from "../Services/catServices.js";

const _catService = new CatService();

//Read All
export const getCats = async (req, res) => {
  const cats = await _catService.getAllCat();
  res.send(cats);
};
//Read One
export const getCatById = async (req, res) => {
  const cat = await _catService.getCat(req.params.id);
  res.send(cat);
};
//ADD
export const addCat = async (req, res) => {
  const cat = await _catService.addCat(req.body);
  res.send(cat);
};
//Update
export const updateCat = async (req, res) => {
  const cat = await _catService.updateCat(req.params.id, req.body);
  res.send(cat);
};
//DELETE
export const removeCat = async (req, res) => {
  const cat = await _catService.removeCat(req.params.id);
  if (!cat) {
    res.status(404).send("Item not found");
  }
  res.status(200).send(`${req.params.id} deleted`);
};
