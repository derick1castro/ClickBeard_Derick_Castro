const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  // Criar o token

  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    "theojamal"
  );

  // Retornar o token

  res.status(200).json({
    message: "Você está autenticado",
    token: token,
    userId: user._id,
  });
};

module.exports = createUserToken;
