- [Why you need to use `rel="noopener"`](https://mathiasbynens.github.io/rel-noopener/)
- Allways underline links, so user can immediately recoginse it
- Show icon for links which will open in new window (optional)
- Don't prevent <kbd>Ctrl</kbd>(<kbd>Cmd</kbd>)-Clicks
- Use links only for cases when you have `href`, otherwise use [Button](#/Button) or `role="rutton" tabindex=0`

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
