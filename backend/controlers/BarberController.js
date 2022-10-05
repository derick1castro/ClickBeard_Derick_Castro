const Barber = require("../models/Barber");

const getToken = require("../helpers/get-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class BarberController {
  //criação dos barbeiros
  static async create(req, res) {
    const { name, age, hiring } = req.body;

    // validations
    if (!name) {
      res.status(400).json({ message: "O nome é obrigatório!" });
      return;
    }

    if (!age) {
      res.status(400).json({ message: "A idade é obrigatória" });
      return;
    }

    if (!hiring) {
      res.status(400).json({ message: "A data de contratação é obrigatória" });
      return;
    }

    //criar a empresa
    const barber = new Barber({
      name,
      age,
      hiring,
    });

    const token = getToken(req);

    try {
      const newBarber = await barber.save();
      res.status(201).json({
        message: "Barbeiro cadastrado com sucesso!",
        newBarber,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  //acessar a dashboard com todos os barbeiros cadastrados
  static async getAllBarbers(req, res) {
    const barber = await Barber.find().sort("-createdAt");

    res.status(200).json({
      barber,
    });
  }

  //acessar os detalhes de cada barbeiro individualmente
  static async getBarberById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if barber exists
    const barber = await Barber.findOne({ _id: id });

    if (!barber) {
      res.status(404).json({ message: "Barbeiro não encontrado!" });
      return;
    }
    res.status(200).json({
      barber: barber,
    });
    return;
  }

  //remoção dos barbeiros
  static async removeBarberById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if barber exists
    const barber = await Barber.findOne({ _id: id });

    if (!barber) {
      res.status(404).json({ message: "Barbeiro não encontrado!" });
      return;
    }

    await Barber.findByIdAndRemove(id);

    res.status(200).json({ message: "Barbeiro removido com sucesso!" });
  }

  static async UpdateBarber(req, res) {
    const id = req.params.id;

    const {name, age, hiring} = req.body;

    const updatedData = {};

    // check if barber exists
    const barber = await Barber.findOne({ _id: id });

    if (!barber) {
      res.status(404).json({ message: "Barbeiro não encontrado!" });
      return;
    }

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    } else {
      updatedData.name = name;
    }

    if (!age) {
      res.status(422).json({ message: "A idade é obrigatória!" });
      return;
    } else {
      updatedData.age = age;
    }

    if (!hiring) {
      res.status(422).json({ message: "A data de contratação é obrigatória!" });
      return;
    } else {
      updatedData.hiring = hiring;
    }

    await Barber.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: "Barbeiro atualizado com sucesso!" });
  }
};
