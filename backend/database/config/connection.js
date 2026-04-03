const mongoose = require("mongoose");

let connectionPromise = null;

async function connectDB(connectionString) {
  if (!connectionString) {
    throw new Error("DB_URL environment variable is missing.");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = mongoose
    .connect(connectionString)
    .then((connection) => {
      console.log("Connected to MongoDB successfully.");
      return connection;
    })
    .catch((error) => {
      connectionPromise = null;
      console.error("MongoDB connection failed:", error.message);
      throw error;
    });

  return connectionPromise;
}

module.exports = connectDB;
