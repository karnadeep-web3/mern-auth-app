const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://https://mern-auth-app-m42c.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Server start
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.connect(
"mongodb+srv://admin:karna12345678@cluster0.xglggsk.mongodb.net/?appName=Cluster0"
)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
});