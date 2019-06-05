import React from "react";
import styled from "@emotion/styled/macro";
import { FiExternalLink } from "react-icons/fi";

const Link = styled("a")(() => ({
  color: "#333",
  ":visited": {
    color: "#666"
  },
  textDecoration: "underline blue",
  textDecorationSkipInk: "auto"
}));

export default ({ children, target, onClick, ...rest }) => {
  const isBlank = target === "_blank";
  return (
    <Link
      {...rest}
      onClick={e => {
        if (e.ctrlKey || e.metaKey) {
          // do nothing
        } else if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
      target={target}
      {...(isBlank ? { rel: "noopener" } : undefined)}
    >
      {children}
      {isBlank && <FiExternalLink size="0.6em" />}
    </Link>
  );
};
