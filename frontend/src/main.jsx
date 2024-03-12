import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import theme from "../theme.js";
import "./index.css";
import { WorkoutsContextProvider } from "./context/WorkoutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider ider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
