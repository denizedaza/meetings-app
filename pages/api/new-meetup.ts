import { MongoClient } from "mongodb";
require("dotenv").config();

// /api/new-meetup

async function handler(req: any, res: any, next: any) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.9ej37.mongodb.net/meetupsapp?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(200).json({ message: "Insert successful!" });
  }
}

export default handler;
