import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import CreateSnippet from "./Components/CreateSnippet";
import SnippetList from "./Components/SnippetList";
import SnippetManager from "./Components/SnippetManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SnippetManager />,
      },
      {
        path: "create-snippet",
        element: <CreateSnippet />,
      },
      {
        path: "snippet-list",
        element: <SnippetList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
