Example:

```js
// Only inclusion of the <LinkButton /> is required
const MemoryRouter = require('react-router').MemoryRouter;
<MemoryRouter initialEntries={["/Email"]} initialIndex={0}>
    <LinkButton toUrl="/foo" />
</MemoryRouter>
```
