import { MongoClient } from "mongodb";

import { connectDatabase, insertDocument, getAllDocuments } from "../../../helpers/db-util";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body;

    if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, "comments", newComment);
    } catch (error) {
      res.status(500).json({ message: "INserting comment failed!" });
      client.close();
      return;
    }

    client.close();
    res.status(210).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    let documents;
    try {
      documents = await getAllDocuments(client, "comments", { _id: -1 });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
      client.close();
      return;
    }

    client.close();

    const formattedDocuments = documents.map((document) => {
      const formattedDoc = { ...document };
      formattedDoc.id = document._id;
      delete formattedDoc._id;

      return formattedDoc;
    });

    console.log(documents);
    res.status(200).json({ comments: formattedDocuments });
  }
};

export default handler;
