import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import AccordianShowCaseComponent from "./components/showcase/AccordianShowCaseComponent";
import ButtonShowCaseComponent from "./components/ButtonShowCaseComponent";
import ComponentName from "./components/DesignToCode/Components/LandingPage";
import FileUpload from "./components/DesignToCode/Components/FileUploadPage";
import DesignToCodeLogin from "./components/DesignToCode/Components/DesignToCodeLogin";
import AlertModalShowCase from "./components/showcase/pages/AlertModalShowCase.jsx";
import WelcomePage from "./components/DesignToCode/DesignToCodeHome.jsx";
import TemplatesLandingPage from "./templates/TemplatesLandingPage.jsx";
import TemplatesPage from "./templates/TemplatesPage.jsx";
import LogoCloudShowCasePage from "./components/showcase/pages/LogoCloudShowCasePage.jsx";
import DropDownShowCase from "./components/showcase/pages/DropDownShowCase.jsx";
import TabsShowCase from "./components/showcase/pages/TabsShowCase.jsx";
import InputBoxShowCase from "./components/showcase/pages/InputBoxShowCase.jsx";

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
    path: "/designtocode/login",
    element: <DesignToCodeLogin />,
  },
  {
    path: "/designtocode/dashboard",
    element: <WelcomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/templatespage",
    element: <TemplatesLandingPage />,
  },
  {
    path: "/templates",
    element: <TemplatesPage />,
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
      {
        path: "Alert",
        element: <AlertModalShowCase />,
      },
      {
        path: "LogoCloud",
        element: <LogoCloudShowCasePage />,
      },
      {
        path: "DropDown",
        element: <DropDownShowCase />,
      },
      {
        path: "Tabs",
        element: <TabsShowCase />,
      },
      {
        path: "PinInput",
        element: <InputBoxShowCase />,
      },
    ],
  },
]);

export default App;
