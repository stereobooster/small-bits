```js
import { FiExternalLink } from "react-icons/fi";

<>
  <Link href="#/Button" onClick={() => alert(1)}>
    Testing underline: p and q and g
  </Link>
  <br />
  <Link href="https://example.com/" target="_blank">
    External link
  </Link>
</>;
```

- Use `<a>` element
- Use links only for cases when you have `href`, otherwise use [Button](#/Button) or `role="rutton" tabindex=0`
- [Use `rel="noopener"`](https://mathiasbynens.github.io/rel-noopener/) with `target="_blank"`
- Allways underline links, so user can immediately recoginse it
- Don't prevent <kbd>Ctrl</kbd>(<kbd>Cmd</kbd>)-Clicks if you handle clicks with JavaScript
- Show icon for links which will open in new window (optional)
