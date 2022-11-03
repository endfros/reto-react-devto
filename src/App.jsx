import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { PostPage } from "./pages/PostPage";
import { CreatePostPage } from "./pages/CreatePostPage";
// import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./layout/DefaultLayout";
import {RegisterPage} from "./pages/RegisterPage"
import {LoginPage} from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/me" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/navbar" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
