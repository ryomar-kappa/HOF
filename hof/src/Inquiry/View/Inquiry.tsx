/** @jsxImportSource @emotion/react */
import Header from "./Header/Header";
import { css } from "@emotion/react";
import BookDetail from "./BookDetail/BookDetail";
import { useState } from "react";
import { Button } from "@mui/material";
import InquiryState from "../State/ImquiryState";

const Inquiry = () => {
  const [titleText, setCount] = useState<InquiryState>(
    new InquiryState(["初期のタイトル"])
  );

  const handleClick = () => {
    setCount(new InquiryState(["変更後のタイトル"]));
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
            <BookDetail title={titleText.getFirstBook()} />
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
