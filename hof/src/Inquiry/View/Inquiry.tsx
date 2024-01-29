/** @jsxImportSource @emotion/react */
import Header from "./Header/Header";
import { css } from "@emotion/react";
import BookDetail from "./BookDetail/BookDetailView";
import { useEffect, useState } from "react";
import InquiryState from "../State/InquiryState";
import fetchBooks from "../../repository/BookRepository";
import { Colors } from "../../util/ColorsUtil";

const Inquiry = () => {
  const [state, setState] = useState<InquiryState>(new InquiryState([]));
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBooks();
      setState(new InquiryState(response));
    };
    fetch();
  }, []);
  return (
    <>
      <div css={backGround}>
        <Header />
        <div css={contents}>
          <div css={logoArea}>
            <p>とてもかっこいいアプリの名前</p>
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
  backgroundColor: Colors.primary(),
  minHeight: "100svh",
  paddingLeft: "1vh",
  paddingRight: "1vh",
});

const contents = css({
  minHeight: "85svh",
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
  height: "65vh",
  backgroundColor: "#FDF6E5",
  overflow: "auto",
  justifyContent: "center",
});
