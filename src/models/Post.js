// src/models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Sprawdzamy, czy model `Post` już istnieje
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
