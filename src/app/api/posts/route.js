// src/app/api/posts/route.js
import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";

export async function GET(req) {
    await dbConnect();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  console.log("Odebrana treść:", body); // Loguje dane z żądania POST
  const post = new Post(body);
  await post.save();
  return new Response(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
  });
}

