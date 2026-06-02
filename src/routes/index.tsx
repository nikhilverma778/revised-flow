import { BrowserRouter, Routes, Route } from "react-router-dom";

import CareFlow from "../pages/CareFlow";
import FaidCheckScreen from "../pages/FaidCheckScreen";
import NotFound from "../pages/NotFound";
import SomethingWentWrong from "../pages/SomethingWentWrong";

import ProtectedCareRoute from "./ProtectedCareRoutes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<CareFlow />} />

        {/* Protected */}
        <Route
          path="/faid-check"
          element={
            <ProtectedCareRoute>
              <FaidCheckScreen />
            </ProtectedCareRoute>
          }
        />

        <Route
          path="/something-went-wrong"
          element={<SomethingWentWrong />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}