# This is a reproduction of a bug in the Bun adapter for Qwik.

1. `bun run build`
2. `bun run serve`

You will see the following error in the server console when you try to submit the form:

```ts
Error: NOTCONN
1014 | var parseRequest = async (request, sharedMap, qwikSerializer) => {
1015 |   var _a2;
1016 |   const req = request.clone();
1017 |   const type = ((_a2 = request.headers.get("content-type")) == null ? void 0 : _a2.split(/[;,]/, 1)[0].trim()) ?? "";
1018 |   if (type === "application/x-www-form-urlencoded" || type === "multipart/form-data") {
1019 |     const formData = await req.formData();
                               ^
TypeError: FormData parse error missing final boundary
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:1019:27
      at parseRequest (/Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:1014:26)
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:970:27
      at parseBody (/Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:966:15)
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:379:29
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:356:16
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:822:21
      at next (/Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:818:15)
      at /Users/josh/Desktop/qwik-bug/server/entry.bun.mjs:641:12
```

True for all `routeAction$`s in the Bun adapter.