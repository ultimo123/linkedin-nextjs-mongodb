import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  const { db } = await connectToDatabase();

  if (method === "DELETE") {
    try {
      await db.collection("posts").deleteOne({ _id: ObjectId(id) });

      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
