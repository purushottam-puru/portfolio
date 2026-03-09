/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Geon from "./pages/Geon";
import Ola from "./pages/Ola";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="geon" element={<Geon />} />
          <Route path="ola" element={<Ola />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

