const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, orgin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

// Routes
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const BarberRoutes = require("./routes/BarberRoutes");
const AgendaRoutes = require("./routes/AgendaRoutes");

app.use("/users", UserRoutes);
app.use("/admin", AdminRoutes);
app.use("/barbeiros", BarberRoutes);
app.use("/agenda", AgendaRoutes);

app.listen(5000);
