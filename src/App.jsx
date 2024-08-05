import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ContentsLayout from "./components/ContentsLayout";
import ComponentsSection from "./components/ComponentsSection";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import ComponentsPage from "./components/ComponentsPage";
import ShowcasePage from "./components/ShowcasePage";
import ButtonShowCase from "./components/showcase/pages/ButtonShowCase";
import Accordian from "./components/showcase/components/Accordian";
import AccordianShowCase from "./components/showcase/pages/AccordianShowCase";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import AccordianShowCaseComponent from "./components/showcase/AccordianShowCaseComponent";
import ButtonShowCaseComponent from "./components/ButtonShowCaseComponent";
import ComponentName from "./components/DesignToCode/Components/LandingPage";
import FileUpload from "./components/example";

const App = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/designtocode",
    element: <ComponentName />,
  },
  {
    path: "/designtocode/upload",
    element: <FileUpload />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/components",
    children: [
      {
        path: "Accordian",
        element: <AccordianShowCaseComponent />,
      },
      {
        path: "Buttons",
        element: <ButtonShowCaseComponent />,
      },
    ],
  },
]);

export default App;
