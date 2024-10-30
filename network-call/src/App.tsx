import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/homepage";
import RegisterPage from "./pages/registerpage";
import DetailUserPage from "./pages/DetailUserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/:userId" element={<DetailUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
