/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography, styled } from "@mui/material";
import { Sx8, Sy8 } from "../../../util/SpaceUtil";
import { Colors } from "../../../util/ColorsUtil";

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
        <Sx8></Sx8>
        <div css={infoArea}>
          <Typography variant="subtitle1" css={title}>
            {title}
          </Typography>
          <div css={infoAreaContents}>
            <Typography>{publisher}</Typography>
            <Sy8></Sy8>
            <Typography>{author}</Typography>
            <Button css={buttonStyle}>借りる</Button>
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

const infoAreaContents = css({});

const buttonStyle = css({
  color: "white",
  fontWeight: "bold",
  backgroundColor: Colors.primary(),
  "&:hover": {
    backgroundColor: Colors.primary(),
  },
  borderRadius: "20px",
});
