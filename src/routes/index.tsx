import { BrowserRouter, Routes, Route } from "react-router-dom";

import CareFlow from "../pages/CareFlow";
import NotFound from "../pages/NotFound";
import SomethingWentWrong from "../pages/SomethingWentWrong";
import CarePlansPage from "../pages/CarePlansPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CareFlow />} />
        <Route path="/care/plans" element={<CarePlansPage />} />
        <Route path="/something-went-wrong" element={<SomethingWentWrong />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}