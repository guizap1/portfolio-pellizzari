import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// principais
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

//páginas
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Skills from "./pages/Skills.jsx";
import Portfolio from "./pages/Portfolio.jsx";

import "./index.css";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <About /> },
      { path: "/resumo", element: <Resume /> },
      { path: "/habilidades", element: <Skills /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contato", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
