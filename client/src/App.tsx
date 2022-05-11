import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";

import { Customers } from "./components/Customers";
import { Requests } from "./components/Requests";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <MantineProvider
      // emotionOptions={{ key: "mantine", stylisPlugins: [rtlPlugin] }}
      theme={{
        colorScheme: "light",
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/customers" element={<Customers />} />
          <Route path="/requests" element={<Requests />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};
