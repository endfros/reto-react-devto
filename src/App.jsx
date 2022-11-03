import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { PostPage } from "./pages/PostPage";

function App() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/me" element={<ProfilePage token={token} />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/login" element={<loginPage setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
