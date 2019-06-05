import React from "react";
import styled from "@emotion/styled/macro";
import { FiExternalLink } from "react-icons/fi";

const Link = styled("a")(() => ({
  color: "#333",
  ":visited": {
    color: "#666"
  },
  "textDecoration": "underline blue",
  "textDecorationSkipInk": "auto"
}));

export default ({ children, target, onClick, ...rest }) => (
  <Link
    {...rest}
    onClick={e => {
      if (e.ctrlKey || e.metaKey) {
        // do nothing
      } else {
        e.preventDefault();
        onClick(e);
      }
    }}
    target={target}
    {...(target === "_blank" ? { rel: "noopener" } : undefined)}
  >
    {children}
    {target === "_blank" && <FiExternalLink size="0.6em" />}
  </Link>
);
