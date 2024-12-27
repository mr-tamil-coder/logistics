const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookie());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const authRouter = require("./routes/authRoutes");
const overview = require("./routes/overview");
const transport = require("./routes/transport");
app.use((req, res, next) => {
  console.log(`Received request at ${req.originalUrl}`);
  next();
});

app.use("/", authRouter);
app.use("/overview", overview);
app.use("/", transport);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Route not found",
    message: `The URL '${req.originalUrl}' does not exist on this server.`,
  });
});
// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
