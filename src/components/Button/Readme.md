```js
<Button>Test</Button>
```

- Use `<button>` element
- Provide `:active` style, so the user would know if the button responds to action or not
- Don't remove the outline
  - If you need to remove outline provide `:focus` style, so the user would know what element is focused
  - with (`:focus-visible`)[https://drafts.csswg.org/selectors/#the-focus-visible-pseudo] you will be able to provide focus state for keyboard users only (so mouse users will not see it)
  - you may need to handle the special case when both states are active same time (`:active`, `:focus`)

### External references

- https://fvsch.com/styling-buttons/