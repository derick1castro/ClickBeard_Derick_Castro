const jwt = require("jsonwebtoken");

const createAdminToken = async (admin, req, res) => {
  const tokenAdmin = jwt.sign(
    {
      name: admin.name,
      id: admin.id,
    },
    "jamaltheo"
  );

  // Retornar o token

  res.status(200).json({
    message: "Você está autenticado",
    token: tokenAdmin,
    adminId: admin._id,
  });
};

module.exports = createAdminToken;
