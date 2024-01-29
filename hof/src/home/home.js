import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg"
import "../App.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ようこそHOFプロジェクトへ!</p>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/inquiry"
          >
            始める
          </Button>
        </header>
      </div>
    </>
  );
};

export default Home;
