const router = require("express").Router();

const AgendaController = require("../controlers/AgendaController");
const verifyToken = require("../helpers/verify-token");

//criação dos barbeiros
router.post("/create", AgendaController.create);

//acessar a dashboard com todasos barbeiros cadastrados
router.get("/all-agendas", AgendaController.getAllAgenda);

//acessar os detalhes de cada empresa individualmente
router.get("/:id", AgendaController.getAgendaById);

//remoção das empresas
router.delete("/:id", AgendaController.removeAgendaById);

//atualização das empresas
router.patch("/:id", AgendaController.UpdateAgenda);

module.exports = router;
