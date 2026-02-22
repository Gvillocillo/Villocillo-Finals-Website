import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonalWebsite from './components/PersonalWebsite';
import './App.css';

const RestApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setPosts([
      { id: 1, title: 'Your Plan 1', body: 'Vintage Web Design' },
      { id: 2, title: 'Your Plan 2', body: 'Maximalist' },
      { id: 3, title: 'Your Plan 3', body: 'The opposite of everything minimalist and modern' },
    ]);
  };

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', body: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async () => {
    if (!selectedPost) return;

    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`, selectedPost);
      const updatedPosts = posts.map(post =>
        post.id === selectedPost.id ? response.data : post
      );
      setPosts(updatedPosts);
      setSelectedPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container">
      <h1>Planned Personal Website for Finals</h1>

      <h2>Plans</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => setSelectedPost(post)}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h2>Pahingi ng Chismis!</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={e => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={e => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={createPost}>Create</button>

      {selectedPost && (
        <div>
          <h2>Update Post</h2>
          <input
            type="text"
            value={selectedPost.title}
            onChange={e => setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <textarea
            value={selectedPost.body}
            onChange={e => setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <button onClick={updatePost}>Update</button>
          <button onClick={() => deletePost(selectedPost.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<PersonalWebsite />} />
        <Route path="/api" element={<RestApiPage />} />
        <Route path="/" element={<PersonalWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;