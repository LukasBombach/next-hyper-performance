# next-hyper-performance

Partial Hydration Technique with React Portals

#### Abstract:

Partial Hydration will become obsolete if and when React Server Side components become a thing. Until then using Portals for partial hydration is a better technique than multiple render roots to only partially hydrate your page.

The main reason for this is that using multiple render roots will instantiate multiple reconciliation processes. React's reconciliation is specifically designed to optimize page updates for performance, amongst others by scheduling tasks and reducing the browser's redraws. Running multiple reconciliation processes concurrently will make these optimizations less effective.

By using portals, it is possible to use a single render root, i.e. only one reconciliation process, and still just upload JavaScript for the parts of the page you actually need to be dynamic.

## Todo

- [x] Violate Next config to inject custom clientjs
- [x] Prevent React from rerendering the root component
- [x] Make React render selected components via portals

> **crap.**
>
> _Just found out Portals cannot by hydrated so if you want to run hydrate a button element with a portal a button gets rendered inside the button instead of actually hydrating it_

- [ ] Add react context to prove everything is rendered in sync
- [ ] make components load as webpack chunks and delay hydration to prove progressive rendering
