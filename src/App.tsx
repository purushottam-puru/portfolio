/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Geon from "./pages/Geon";
import Ola from "./pages/Ola";
import CapacityPlanner from "./pages/CapacityPlanner";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="geon" element={<Geon />} />
          <Route path="ola" element={<Ola />} />
          <Route path="capacity" element={<CapacityPlanner />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

