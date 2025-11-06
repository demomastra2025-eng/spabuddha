
import express from "express";
import ViteExpress from "vite-express";
import jwt from "jsonwebtoken";

const app = express();

// It's recommended to store this in an environment variable
const JWT_SECRET = "your-super-secret-key";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // In a real application, you would validate the credentials against a database
  if (email === "admin@buddhaspa.kz" && password === "password") {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...");
});
