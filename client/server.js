const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors"); 

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient("mongodb://localhost:27017/Nexathon'25");
// const uri = "mongodb+srv://UmeshSarathy:<1234>@cluster0.b3d7z.mongodb.net/"
// const client = new MongoClient(uri);

const dbName = "Nexathon";

app.post("/save", async (req, res) => {
    await client.connect();
    await client.db(dbName).collection("problem-details").insertOne(req.body);
    res.json({ message: "Data saved!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));