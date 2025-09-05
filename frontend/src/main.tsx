import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import Login from "./components/ui/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index path="/login" element={<Login />} />
      {/* <Route path="/list" element={<TodoApp />} /> */}
    </Routes>
  </BrowserRouter>
);
