import { Link } from "react-router-dom";
import Card from "./Card";
import { Button } from "@mui/material";
import readData from "../repository/BookRepository";


const Register = () => {
  return (
    <>
      <h1>一覧ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <Card />
      <Button variant="contained" size="large" onClick={readData}>
        本を追加
      </Button>
    </>
  );
};

export default Register;
