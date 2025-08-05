const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// MongoDB Connection
const uri = "mongodb://localhost:27017/Nexathon'25"; // Your MongoDB URI
const client = new MongoClient(uri);

async function getData() {
    await client.connect();
    const database = client.db("Nexathon");
    const collection = database.collection("problem-details");
    return await collection.find({}).toArray();
}

// API Route
app.get("/clients", async (req, res) => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
