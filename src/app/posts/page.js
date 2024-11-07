// src/app/posts/page.js
'use client';
import { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');

    // Funkcja do pobierania postów
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            if (!response.ok) {
                console.error('Błąd pobierania postów');
                return;
            }
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    // Funkcja do dodawania nowego posta
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            console.error('Błąd dodawania posta');
            return;
        }

        const newPost = await response.json();
        setPosts([...posts, newPost]);
        setMessage('');
    };

    return (
        <div>
            <h1>Lista Postów</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Wpisz wiadomość"
                    required
                />
                <button type="submit">Dodaj Post</button>
            </form>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>{post.message}</li>
                ))}
            </ul>
        </div>
    );
}
