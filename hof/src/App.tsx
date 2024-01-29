import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inquiry from "./Inquiry/View/Inquiry";
import Login from "./login/login";
import Home from "./home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/inquiry/`} element={<Inquiry />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
