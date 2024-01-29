/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Sx4 = () => {
  return <div css={sx4}></div>;
};
const Sx8 = () => {
  return <div css={sx8}></div>;
};
const Sy8 = () => {
  return <div css={sy8}></div>;
};

export { Sx4, Sx8, Sy8 };

const sx4 = css({
  width: "4px",
});

const sx8 = css({
  width: "4px",
});
const sy8 = css({
  width: "8px",
});
