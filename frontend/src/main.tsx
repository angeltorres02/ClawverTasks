import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import Login from "./components/pages/Login.tsx";
import NewAccount from "./components/pages/NewAccount.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import MainPage from "./components/pages/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/new-account" element={<NewAccount />} />
    </Routes>
  </BrowserRouter>
);
