const router = require("express").Router();

const BarberController = require("../controlers/BarberController");
const verifyToken = require("../helpers/verify-token");

//criação dos barbeiros
router.post("/create", BarberController.create);

//acessar a dashboard com todasos barbeiros cadastrados
router.get("/allbarbers", BarberController.getAllBarbers);

//acessar os detalhes de cada empresa individualmente
router.get("/:id", BarberController.getBarberById);

//remoção das empresas
router.delete("/:id", BarberController.removeBarberById);

//atualização das empresas
router.patch("/:id", BarberController.UpdateBarber);

module.exports = router;
