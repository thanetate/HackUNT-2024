const express = require("express");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://hackunt:v9SBpVqZUHPUQKKg@cluster0.nw0td.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.get("/", (req, res) => res.json("Hello"));

app.post("/signup", (req, res) => {
  res.json("Signup page");
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
