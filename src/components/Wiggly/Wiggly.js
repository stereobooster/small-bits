import React from "react";
import styled from "@emotion/styled/macro";

const wave = (
  color = "blue"
) => `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.3 6" xml:space="preserve">
<path fill="${color}" d="M-5.5,3.8C-4.2,4.8-2.8,6,0,6s4.2-1.2,5.5-2.2C6.6,2.8,7.6,2,9.7,2s3,0.8,4.2,1.8c1.3,1,2.7,2.2,5.5,2.2
	s4.2-1.2,5.5-2.2l-1.4-0.9c-1.1,1-2.1,1.8-4.2,1.8s-3-0.8-4.2-1.8c-1.2-1-2.7-2.2-5.4-2.2c-2.8,0-4.2,1.2-5.5,2.2
	C3,3.9,2.1,4.7,0,4.7s-3-0.8-4.2-1.8L-5.5,3.8z"/>
</svg>`;

const Wiggly = styled("a")(() => ({
  textDecoration: "none",
  background: `url("data:image/svg+xml;base64,${window.btoa(wave())}")`,
  backgroundRepeat: "repeat-x",
  paddingBottom: "8px",
  backgroundSize: "15px 5px",
  backgroundPosition: "2px 18px"
}));

/** @component */
export default Wiggly;
