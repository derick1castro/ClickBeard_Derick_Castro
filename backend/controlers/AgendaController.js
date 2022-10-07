const Agenda = require("../models/Agenda");

const getToken = require("../helpers/get-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class AgendaController {
  //criação dos barbeiros
  static async create(req, res) {
    const {
      name,
      hora,
      especializacao1,
      especializacao2,
      especializacao3,
      especializacao4,
      especializacao5,
      especializacao6,
    } = req.body;

    // validations
    if (!name) {
      res.status(400).json({ message: "O nome é obrigatório!" });
      return;
    }

    if (!hora) {
      res.status(400).json({ message: "O horário é obrigatório" });
      return;
    }

    //criar a empresa
    const agenda = new Agenda({
      name,
      hora,
      especializacao1,
      especializacao2,
      especializacao3,
      especializacao4,
      especializacao5,
      especializacao6,
    });

    try {
      const newAgenda = await agenda.save();
      res.status(201).json({
        message: "Horário cadastrado com sucesso!",
        newAgenda,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  //acessar a dashboard com todos os barbeiros cadastrados
  static async getAllAgenda(req, res) {
    const agenda = await Agenda.find().sort("-createdAt");

    res.status(200).json({
      agenda,
    });
  }

  //acessar os detalhes de cada barbeiro individualmente
  static async getAgendaById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if barber exists
    const agenda = await Agenda.findOne({ _id: id });

    if (!agenda) {
      res.status(404).json({ message: "Horário não encontrado!" });
      return;
    }
    res.status(200).json({
      agenda: agenda,
    });
    return;
  }

  //remoção dos barbeiros
  static async removeAgendaById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if barber exists
    const agenda = await Agenda.findOne({ _id: id });

    if (!agenda) {
      res.status(404).json({ message: "Horário não encontrado!" });
      return;
    }

    await Agenda.findByIdAndRemove(id);

    res.status(200).json({ message: "Horário removido com sucesso!" });
  }

  static async UpdateAgenda(req, res) {
    const id = req.params.id;

    const { name, hora } = req.body;

    const updatedData = {};

    // check if barber exists
    const agenda = await Agenda.findOne({ _id: id });

    if (!agenda) {
      res.status(404).json({ message: "Horário não encontrado!" });
      return;
    }

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    } else {
      updatedData.name = name;
    }

    if (!hora) {
      res.status(422).json({ message: "O horário é obrigatório" });
      return;
    } else {
      updatedData.hora = hora;
    }

    await Agenda.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: "Horário atualizado com sucesso!" });
  }
};
