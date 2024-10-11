import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import Board_Ambulance from "./pages/Board_Ambulance";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/"         element={<MainPage />} />
        <Route path="/Board_Ambulance"  element={<Board_Ambulance />} />
        <Route path="*"         element={<div> Page not found </div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
