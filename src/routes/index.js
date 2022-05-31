import { BrowserRouter, Route, Routes } from "react-router-dom";

import CalendarPage from "../pages/calendarPage";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
