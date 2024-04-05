const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./configs/connectDB");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
