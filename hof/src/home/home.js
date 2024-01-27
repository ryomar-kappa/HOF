import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  return (
    <>
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ようこそHOFプロジェクトへ!
        </p>
       <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      </header>
    </div>
      
    </>
  );
};

export default Home;