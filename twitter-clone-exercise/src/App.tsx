import { Route, Routes } from "react-router-dom";
import HomeLogin from "./pages/Homelogin";

function App() {
  return (
    <div>
      <HomeLogin />
      {/* <Routes>
        <Route path="/login" element={<HomeLogin />} />
        <Route path="/signup" element={<HomeLogin />} />
      </Routes> */}
    </div>
  );
}

export default App;
