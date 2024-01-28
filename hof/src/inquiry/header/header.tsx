/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { css } from "@emotion/react";

const Header = () => {
  return (
    <div css={header}>
      <div css={buttonContainer}>
        <Button variant="text" size="large" css={buttonStyle}>
          TOP
        </Button>
        <Button variant="text" size="large" css={buttonStyle}>
          貸出
        </Button>
        <Button variant="text" size="large" css={buttonStyle}>
          返却
        </Button>
      </div>
    </div>
  );
};

export default Header;

const headerHeight = "10vh";

const header = css({
  minHeight: headerHeight,
});

const buttonStyle = css({
  color: "black",
  "&:hover": {
    backgroundColor: "white",
  },
});

const buttonContainer = css({
  height: headerHeight,
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
});
