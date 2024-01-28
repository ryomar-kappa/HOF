/** @jsxImportSource @emotion/react */
import Header from "./header/header";
import { css } from "@emotion/react";
import BookDetail from "./BookDetail/BookDetail";

const Register = () => {
  return (
    <>
      <div css={backGround}>
        <Header />
        <div css={contents}>
          <div css={logoArea}>
            <p>とてもかっこいいアプリの名前</p>
          </div>
            <div css={inquiryArea}>
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
            <BookDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

const backGround = css({
  backgroundColor: "#F6AB00",
 minHeight:"100svh",
 paddingLeft:"1vh",
 paddingRight:"1vh"
});

const contents = css({
  minHeight: "80vh",
  backgroundColor: "white",
  borderRadius: "10px"
});

const logoArea = css({
  display: "flex",
  minHeight: "20vh",
  justifyContent: "center",
});

const inquiryArea = css({
  display:"flex",
  flexWrap:"wrap",
  height: "60vh",
  backgroundColor: "#FDF6E5",
  overflow:"auto",
  justifyContent:"center"
});
