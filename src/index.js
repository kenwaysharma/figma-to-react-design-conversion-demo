import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Market from "./routes/Market";
import Cart from "./routes/Cart";
import Settings from "./routes/Settings";
import Home from "./routes/Home";
import Logout from "./routes/Logout";
import ChooseYourNewSite from "./components/StepperSteps/ChooseYourNewSite";
import Step2 from "./components/StepperSteps/Step2";
import Step3 from "./components/StepperSteps/Step3";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "market",
        element: <Market />,
        children: [
          {
            path: "",
            element: <ChooseYourNewSite />,
          },
          {
            path: "step1",
            element: <ChooseYourNewSite />,
          },
          {
            path: "step2",
            element: <Step2 />,
          },
          {
            path: "step3",
            element: <Step3 />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
