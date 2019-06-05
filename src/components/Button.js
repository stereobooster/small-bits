import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

const emboss = "inset -1px -1px 0 0 #959da5";
const focus = "0 0 0 0.2em #c8e1ff";
const active = {
  transform: "translate(1px, 1px)",
  "box-shadow": "none"
};
const activeFocus = {
  "box-shadow": focus
};

const Button = styled("button")(({ isMouse }) => ({
  font: "inherit",
  cursor: "pointer",
  // actual styles
  "background-color": "#fafbfc",
  border: "1px solid #c6cbd1",
  "border-bottom-color": "#959da5",
  "border-radius": "3px",
  "box-shadow": emboss,
  color: "#444d56",
  padding: "0.2em 0.6em",
  // focus
  outline: "none",
  "::-moz-focus-inner": {
    border: "none"
  },
  ":active": active,
  ":focus": !isMouse && {
    "border-color": "#2188ff",
    "box-shadow": [emboss, focus].join(", ")
  },
  ":active:focus": !isMouse && activeFocus
}));

Button.propTypes = {
  isMouse: PropTypes.bool
};

export default ({ children, container, onActive, hotKey, ...rest }) => {
  const [isMouse, setIsMouse] = React.useState();
  const enableIsMouse = React.useCallback(() => setIsMouse(true), []);
  const disableIsMouse = React.useCallback(() => setIsMouse(false), []);
  return (
    <Button
      {...rest}
      onMouseDown={enableIsMouse}
      onKeyDown={disableIsMouse}
      isMouse={isMouse}
    >
      {children}
    </Button>
  );
};
