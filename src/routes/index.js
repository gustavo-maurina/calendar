import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../pages/App";
import CalendarPage from "../pages/calendarPage";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
