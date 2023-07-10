import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

const API = "http://localhost:8000/todos";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    let { data } = await axios(API);
    setPosts(data);
  }

  async function deletePosts(id) {
    await axios.delete(`${API}/${id}`);
    getPosts();
  }

  async function createPost(post) {
    await axios.post(API, post);
  }

  useEffect(() => {
    getPosts();
    deletePosts();
  }, []);
  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <PostsList posts={posts} deletePosts={deletePosts} />
    </div>
  );
}

export default App;
