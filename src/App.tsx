/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Geon from "./pages/Geon";
import Ola from "./pages/Ola";
import CapacityPlanner from "./pages/CapacityPlanner";

export default function App() {
  console.log("App is rendering...");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="geon" element={<Geon />} />
          <Route path="ola" element={<Ola />} />
          <Route path="capacity" element={<CapacityPlanner />} />
          {/* Catch-all route to handle legacy or incorrect hash paths like /#about */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

