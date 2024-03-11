const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const database = "overcooked";

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MongoDB", err);
    process.exit(1);
  }
  console.log("Connecté à la base de données MongoDB");
});

// Créer une recette POST
// Update PUT
// Suppri DELETE
// Lire GET

// Créer un utilisateur POST
// Update PUT
// Supprimer DELETE
// Afficher un profil GET

// RECIPES
app.post("/recipes", async (req, res) => {
  try {
    const collection = client.db(database).collection("recipes");
    const result = await collection.insertOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/recipes/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("recipes");
    const result = await collection.updateOne(
      {
        _id: ObjectId(req.params.id),
      },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/recipes/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("recipes");
    const result = await collection.deleteOne(
      {
        _id: ObjectId(req.params.id),
      },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/recipes/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("recipes");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// USERS

app.post("/users", async (req, res) => {
  try {
    const collection = client.db(database).collection("users");
    const result = await collection.insertOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("users");
    const result = await collection.updateOne(
      {
        _id: ObjectId(req.params.id),
      },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("users");
    const result = await collection.deleteOne(
      {
        _id: ObjectId(req.params.id),
      },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("users");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// COMMENTS

// Créer un commentaire POST
// Supprimer DELETE
// Lire GET
// Aggrégation 

app.post("/comments", async (req, res) => {
  try {
    const collection = client.db(database).collection("comments");
    const result = await collection.insertOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/comments/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("comments");
    const result = await collection.deleteOne(
      {
        _id: ObjectId(req.params.id),
      },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/comments/:id", async (req, res) => {
  try {
    const collection = client.db(database).collection("comments");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});