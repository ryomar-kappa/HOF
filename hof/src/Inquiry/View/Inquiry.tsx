/** @jsxImportSource @emotion/react */
import Header from "./Header/Header";
import { css } from "@emotion/react";
import BookDetail from "./BookDetail/BookDetailView";
import { useState } from "react";
import { Button } from "@mui/material";
import InquiryState from "../State/InquiryState";
import Book from "../State/Book";

const Inquiry = () => {
  const [state, setState] = useState<InquiryState>(
    new InquiryState([new Book('初期タイトル','高山龍馬','シンプレクス'),new Book('初期タイトル2','四宮','D3')])
  );

  const handleClick = () => {
    setState(new InquiryState([new Book('変更後タイトル','松原一郎','クロスピア'),new Book('平本おにぎりの全て','平本柊','D1')]));
  };
  return (
    <>
      <div css={backGround}>
        <Header />
        <div css={contents}>
          <div css={logoArea}>
            <p>とてもかっこいいアプリの名前</p>
            <Button variant="contained" size="large" onClick={handleClick}>
           タイトル更新
            </Button>
          </div>
          <div css={inquiryArea}>
           
      {Array.from({ length: state.numberOfBooks() }).map((_, index) => (
        <BookDetail 
          title={state.getTitle(index)}
          author={state.getAuthor(index)}
          publisher={state.getPublisher(index)}
        />
      ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;

const backGround = css({
  backgroundColor: "#F6AB00",
  minHeight: "100svh",
  paddingLeft: "1vh",
  paddingRight: "1vh",
});

const contents = css({
  minHeight: "80vh",
  backgroundColor: "white",
  borderRadius: "10px",
});

const logoArea = css({
  display: "flex",
  minHeight: "20vh",
  justifyContent: "center",
});

const inquiryArea = css({
  display: "flex",
  flexWrap: "wrap",
  height: "60vh",
  backgroundColor: "#FDF6E5",
  overflow: "auto",
  justifyContent: "center",
});
