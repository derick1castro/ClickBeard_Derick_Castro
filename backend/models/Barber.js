const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Barber = mongoose.model(
  "Barber",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hiring: {
      type: String,
      required: true,
    },
    especialidade: {
      type: String,
    },
  })
);

module.exports = Barber;
