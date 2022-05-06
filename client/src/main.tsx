import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";
import "./main.css";

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }
};

const queryClient = new QueryClient();

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
});
