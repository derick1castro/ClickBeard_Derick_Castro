const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const createAdminToken = require("../helpers/create-admin-token");

module.exports = class AdminController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    // Validações
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }

    // Checar se o usuário existe
    const adminExists = await Admin.findOne({ email: email });

    if (adminExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail" });
      return;
    }

    // criar o password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //Criar o administrador
    const admin = new Admin({
      name,
      email,
      password: passwordHash,
    });

    try {
      const newAdmin = await admin.save();

      await createAdminToken(newAdmin, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }

    // Checar se o administrador existe
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      res
        .status(422)
        .json({ message: "Não há usuário cadastrado com este e-mail!" });
      return;
    }

    // checar se o password combina com a senha do banco de dados
    const checkPassword = await bcrypt.compare(password, admin.password);

    if (!checkPassword) {
      res.status(422).json({ message: "Senha inválida" });
      return;
    }

    await createAdminToken(admin, req, res);
  }
};
