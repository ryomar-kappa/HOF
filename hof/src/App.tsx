import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inquiry from "./inquiry/Inquiry";
import Login from "./login/login";
import Home from "./home/home";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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


