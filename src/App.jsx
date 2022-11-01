import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { PostPage } from "./pages/PostPage";
// import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/me" element={<ProfilePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/navbar" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
