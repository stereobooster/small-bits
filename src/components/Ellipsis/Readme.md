### Native browser support

```js
import styled from "@emotion/styled";

const EllipsisNative = styled("div")(() => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap"
}));

<EllipsisNative style={{ width: 200 }}>
  Very long text long text long text long text long text long text long text long text long text long text long text
</EllipsisNative>;
```

### Multiline

- https://github.com/springload/react-accessible-ellipsis
- https://github.com/microlinkhq/nanoclamp

### In the middle of the text

- https://codepen.io/markchitty/pen/RNZbRE
