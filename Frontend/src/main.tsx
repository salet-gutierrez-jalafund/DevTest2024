import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./assets/style/AllStyle.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPage } from "./types/RoutesPage.ts";
import MainPage from "./pages/MainPage.tsx";
import FormPoll from "./componets/FormPoll.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesPage.MAIN_PAGE} element={<MainPage/>} />
          <Route path={RoutesPage.FORM_POLL} element={<FormPoll/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
