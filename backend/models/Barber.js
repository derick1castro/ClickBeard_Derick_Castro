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
    especializacao1: {
      type: String,
    },
    especializacao2: {
      type: String,
    },
    especializacao3: {
      type: String,
    },
    especializacao4: {
      type: String,
    },
    especializacao5: {
      type: String,
    },
    especializacao6: {
      type: String,
    },
  })
);

module.exports = Barber;
