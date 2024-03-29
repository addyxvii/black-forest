var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/addison/workspace/black-forest/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/addison/workspace/black-forest/app/routes/mempool/index.tsx
var mempool_exports = {};
__export(mempool_exports, {
  default: () => Mempool,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react3 = require("@remix-run/react");

// app/utils/txStream.tsx
var import_ethers = require("ethers");
var url = process.env.ETHEREUM_MAINNET_RPC;
function connectToMempool() {
  const customWsProvider = new import_ethers.ethers.providers.WebSocketProvider(url);
  customWsProvider.on("pending", (tx) => {
    customWsProvider.getTransaction(tx).then(function(transaction) {
      console.log(transaction);
    });
  });
  customWsProvider._websocket.on("error", async () => {
    console.log(`Unable to connect retrying in 3s...`);
    setTimeout(connectToMempool, 3e3);
  });
  customWsProvider._websocket.on("close", async (code) => {
    console.log(`Connection lost with code ${code}! Attempting reconnect in 3s...`);
    customWsProvider._websocket.terminate();
    setTimeout(connectToMempool, 3e3);
  });
}

// app/models/memepool.server.ts
async function startStream() {
  return connectToMempool();
}

// route:/Users/addison/workspace/black-forest/app/routes/mempool/index.tsx
var loader = async () => {
  return (0, import_node.json)({
    posts: await startStream()
  });
};
function Mempool() {
  const { mempool } = (0, import_react3.useLoaderData)();
  console.log(mempool);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "Mempool"));
}

// route:/Users/addison/workspace/black-forest/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react_router_dom = require("react-router-dom");
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to the Black Forest"), /* @__PURE__ */ React.createElement("h2", null, "What's done in the dark will be brought to the light"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/mempool",
    className: "text-xl text-blue-600 underline"
  }, "mempool"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a908a2db", "entry": { "module": "/build/entry.client-VOFVTKAC.js", "imports": ["/build/_shared/chunk-5AOWDLJX.js", "/build/_shared/chunk-JDS7QY2H.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NHZDJ67R.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-CWPXK7WG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mempool/index": { "id": "routes/mempool/index", "parentId": "root", "path": "mempool", "index": true, "caseSensitive": void 0, "module": "/build/routes/mempool/index-Q2PUAZM2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A908A2DB.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/mempool/index": {
    id: "routes/mempool/index",
    parentId: "root",
    path: "mempool",
    index: true,
    caseSensitive: void 0,
    module: mempool_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
