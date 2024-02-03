import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inquiry from "./Inquiry/View/Inquiry";
import Home from "./home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/inquiry/`} element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
