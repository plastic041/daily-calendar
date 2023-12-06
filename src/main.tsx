import React from "react";
import ReactDOM from "react-dom/client";

import { Providers } from "./providers.tsx";
import { App } from "./app.tsx";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
