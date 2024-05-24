const mongoose = require("mongoose");
const config = require("config");

const db =
  process.env.NODE_ENV === "production"
    ? process.env.mongoURI
    : config.get("mongoURI");

console.log(db);

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(db);
    console.log("Leads DB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
