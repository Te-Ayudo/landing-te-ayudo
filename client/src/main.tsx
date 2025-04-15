import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./hooks/use-language";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

// Se envuelve la aplicación en StrictMode para detectar problemas de inicialización
// StrictMode invoca dos veces los componentes en desarrollo para detectar efectos secundarios impuros
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
