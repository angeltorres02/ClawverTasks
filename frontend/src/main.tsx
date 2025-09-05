import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import Login from "./components/pages/Login.tsx";
import NewAccount from "./components/pages/NewAccount.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index path="/login" element={<Login />} />
      <Route path="/new-account" element={<NewAccount />} />
    </Routes>
  </BrowserRouter>
);
