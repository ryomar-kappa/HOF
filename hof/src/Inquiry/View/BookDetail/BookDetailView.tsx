/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

const BookDetail = (props: {
  title: string;
  author: string;
  publisher: string;
}) => {
  const { title, author, publisher } = props;
  return (
    <>
      <div css={detailArea}>
        <div css={pictureArea}></div>
        <div css={infoArea}>
          <Typography variant="subtitle1" css={title}>
            {title}
          </Typography>
          <div css={infoAreaContents}>
            <Typography>{publisher}</Typography>
            <div css={sy8}></div>
            <Typography>{author}</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;

const bookDetailAreaHeight = "235px";

const detailArea = css({
  display: "flex",
  height: bookDetailAreaHeight,
  width: "400px",
  margin: "20px",
});

const pictureArea = css({
  height: bookDetailAreaHeight,
  width: "185px",
  backgroundColor: "gray",
});
const infoArea = css({
  height: bookDetailAreaHeight,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "215px",
});

const sy20 = css({
  height: "20px",
});
const sy8 = css({
  height: "8px",
});

const infoAreaContents = css({});

const title = css({
  fontWeight: "bold",
  paddingTop: "8px",
});
