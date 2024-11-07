import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
      const posts = await Post.find({});
      res.status(200).json(posts);
  } else if (req.method === 'POST') {
      const post = new Post(req.body);
      await post.save();
      res.status(201).json(post);
  } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}