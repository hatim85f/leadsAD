const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/customers", require("./routes/api/customers"));
app.use("/api/test", require("./routes/api/test"));

app.get("/", (req, res) => {
  res.status(200).send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Leads Server started on port ${PORT}`);
});
