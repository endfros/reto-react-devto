import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { PostPage } from "./pages/PostPage";
import { CreatePostPage } from "./pages/CreatePostPage";
// import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./layout/DefaultLayout";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage token={token} setToken={setToken} />}
        />
        <Route
          path="/user/me"
          element={<ProfilePage token={token} setToken={setToken} />}
        />
        <Route
          path="/register"
          element={<RegisterPage token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<LoginPage token={token} setToken={setToken} />}
        />
        <Route
          path="/post"
          element={<PostPage token={token} setToken={setToken} />}
        />
        <Route
          path="/post/:postId"
          element={<PostPage token={token} setToken={setToken} />}
        />
        <Route
          path="/create-post"
          element={<CreatePostPage token={token} setToken={setToken} />}
        />
        <Route
          path="/navbar"
          element={<DefaultLayout token={token} setToken={setToken} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
