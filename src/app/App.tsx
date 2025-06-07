import "./App.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";

import NiceModal from "@ebay/nice-modal-react";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NiceModal.Provider>
          <RouterProvider router={router} />
        </NiceModal.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
