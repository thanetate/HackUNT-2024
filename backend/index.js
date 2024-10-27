const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const uri =
  "mongodb+srv://hackunt:v9SBpVqZUHPUQKKg@cluster0.nw0td.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Hello"));

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generatedUserId = uuidv4();

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User already exists. Please login");
    }

    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      password: password,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("app-data");
    const users = db.collection("users");

    const returnedUsers = await users.find().toArray();
    res.json(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
