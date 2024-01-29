/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography, styled } from "@mui/material";
import { Sx8, Sy8 } from "../../../util/SpaceUtil";
import { Colors } from "../../../util/ColorsUtil";
import Modal from "react-modal";
import { useState } from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import complete from "../../../Assets/complete.json";
import { AnimationItem } from "lottie-web";

const BookDetail = (props: {
  title: string;
  author: string;
  publisher: string;
}) => {
  const { title, author, publisher } = props;
  const [isOpenModal, setState] = useState<boolean>(false);
  const [completeItem, setCompleteItem] = useState<AnimationItem>();
  const hundleOnClick = () => {
    setState(true);
  };
  Modal.setAppElement("#root");
  return (
    <>
      <div css={detailArea}>
        <div css={pictureArea}></div>
        <Sx8 />
        <div css={infoArea}>
          <Typography variant="subtitle1" css={title}>
            {title}
          </Typography>
          <div css={infoAreaContents}>
            <Typography>{publisher}</Typography>
            <Sy8 />
            <Typography>{author}</Typography>
            <Button css={buttonStyle} onClick={() => hundleOnClick()}>
              借りる
            </Button>

            <Modal
              isOpen={isOpenModal}
              style={customModalStyles}
              onRequestClose={() => {
                setState(false);
              }}
            >
              本当に本を借りるのか？？
              <br />
              <Button css={buttonStyle} onClick={() => completeItem?.play()}>
                借りる
              </Button>
              <Player
                lottieRef={(instance) => {
                  setCompleteItem(instance);
                }}
                src={complete}
                style={{ height: "100px", width: "100px" }}
              ></Player>
            </Modal>
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

const customModalStyles = {
  content: {
    width: "50vh",
    height: "30vh",
    margin: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
