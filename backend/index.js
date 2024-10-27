const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const uri =
  "mongodb+srv://hackunt:v9SBpVqZUHPUQKKg@cluster0.nw0td.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => res.json("Hello"));

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { name, email, password } = req.body;

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
      name: name,
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

app.post("/login", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const user = await users.findOne({ email, password });

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign(user, email, {
      expiresIn: 60 * 24,
    });

    res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.put("/user", async (req, res) => {
  const client = new MongoClient(uri);
  const formData = req.body.formData;

  try {
    await client.connect();
    const db = client.db("app-data");
    const users = db.collection("users");

    const query = { user_id: formData.user_id };
    const updateDocument = {
      $set: {
        username: formData.username,
        avatar: formData.avatar,
        monster: formData.monster,
        about: formData.about,
        identifier1: formData.identifier1,
        identifier2: formData.identifier2,
        identifier3: formData.indentifier3,
        gender: formData.gender,
        gender_interest: formData.gender_interest,
        url1: formData.url1,
        matches: formData.matches,
      },
    };
    const insertedUser = await users.updateOne(query, updateDocument);
    const updatedUser = await users.findOne(query); // Fetch the updated user
    res.send(updatedUser);
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

app.get("/gendered-users", async (req, res) => {
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

app.get("/user", async (req, res) => {
  const client = new MongoClient(uri);
  const userId = req.query.userId;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const query = { user_id: userId };
    const user = await users.findOne(query);
    res.json(user);
  } finally {
    await client.close();
  }
});

app.post("/swipes", async (req, res) => {
  const client = new MongoClient(uri);
  const { swipedOnId, direction } = req.body;  // Expecting only swipedOnId and direction

  try {
    await client.connect();
    const database = client.db("app-data");
    const swipes = database.collection("swipes");
    const filter = { swipedOnId, direction };
    
    const update = {
      $set: {
        swipedOnId,   // ID of the user who was swiped on
        direction,    // 'right' for like, 'left' for dislike
      }
    };

    const result = await swipes.updateOne(filter, update, { upsert: true});
    res.status(201).json({ message: 'Swipe saved successfully', swipeId: result.upsertedId || result.modifiedCount });
  } catch (error) {
    console.error("Error saving swipe:", error);
    res.status(500).json({ error: 'Failed to save swipe' });
  } finally {
    await client.close();
  }
});


app.get("/swipes", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("app-data");
    const swipes = database.collection("swipes");

    // Retrieve only `swipedOnId` and `direction` fields
    const swipeHistory = await swipes.find({}, { projection: { swipedOnId: 1, direction: 1 } }).toArray();
    res.json(swipeHistory);
  } catch (error) {
    console.error("Error retrieving swipes:", error);
    res.status(500).json({ error: 'Failed to retrieve swipes' });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));