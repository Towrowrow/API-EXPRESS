import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
  },
  age: {
    type: Number,
    default: 1,
    validate: (value) => {
      if (value <= 0) {
        throw new Error("Cat must be older than 0");
      }
    },
  },
});

const Cat = mongoose.model("Cat", CatSchema);

export default Cat;
