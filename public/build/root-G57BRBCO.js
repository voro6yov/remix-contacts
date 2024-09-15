import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-ISENFNV5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  createHotContext
} from "/build/_shared/chunk-B23UVFNR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/app.css?url
var app_default = "/build/_assets/app-V3UKCKY4.css?url";

// app/root.js
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.js"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
function App() {
  _s();
  const {
    contacts,
    q
  } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
  (0, import_react2.useEffect)(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  });
  return (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [(0, import_jsx_runtime.jsxs)("head", {
      children: [(0, import_jsx_runtime.jsx)("meta", {
        charSet: "utf-8"
      }), (0, import_jsx_runtime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), (0, import_jsx_runtime.jsx)(Meta, {}), (0, import_jsx_runtime.jsx)(Links, {})]
    }), (0, import_jsx_runtime.jsxs)("body", {
      children: [(0, import_jsx_runtime.jsxs)("div", {
        id: "sidebar",
        children: [(0, import_jsx_runtime.jsx)("h1", {
          children: "Remix Contacts"
        }), (0, import_jsx_runtime.jsxs)("div", {
          children: [(0, import_jsx_runtime.jsxs)(Form, {
            id: "search-form",
            onChange: (event) => {
              const isFirstSearch = q === null;
              submit(event.currentTarget, {
                replace: !isFirstSearch
              });
            },
            role: "search",
            children: [(0, import_jsx_runtime.jsx)("input", {
              id: "q",
              "aria-label": "Search contacts",
              className: searching ? "loading" : "",
              defaultValue: q || "",
              placeholder: "Search",
              type: "search",
              name: "q"
            }), (0, import_jsx_runtime.jsx)("div", {
              id: "search-spinner",
              "aria-hidden": true,
              hidden: !searching
            })]
          }), (0, import_jsx_runtime.jsx)(Form, {
            method: "post",
            children: (0, import_jsx_runtime.jsx)("button", {
              type: "submit",
              children: "New"
            })
          })]
        }), (0, import_jsx_runtime.jsx)("nav", {
          children: contacts.length ? (0, import_jsx_runtime.jsx)("ul", {
            children: contacts.map((contact) => (0, import_jsx_runtime.jsx)("li", {
              children: (0, import_jsx_runtime.jsx)(NavLink, {
                className: ({
                  isActive,
                  isPending
                }) => isActive ? "active" : isPending ? "pending" : "",
                to: `contacts/${contact.id}`,
                children: (0, import_jsx_runtime.jsxs)(Link, {
                  to: `contacts/${contact.id}`,
                  children: [contact.first || contact.last ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                    children: [contact.first, " ", contact.last]
                  }) : (0, import_jsx_runtime.jsx)("i", {
                    children: "No Name"
                  }), " ", contact.favorite ? (0, import_jsx_runtime.jsx)("span", {
                    children: "\u2605"
                  }) : null]
                })
              })
            }, contact.id))
          }) : (0, import_jsx_runtime.jsx)("p", {
            children: (0, import_jsx_runtime.jsx)("i", {
              children: "No contacts"
            })
          })
        })]
      }), (0, import_jsx_runtime.jsx)("div", {
        className: navigation.state === "loading" && !searching ? "loading" : "",
        id: "detail",
        children: (0, import_jsx_runtime.jsx)(Outlet, {})
      }), (0, import_jsx_runtime.jsx)(ScrollRestoration, {}), (0, import_jsx_runtime.jsx)(Scripts, {})]
    })]
  });
}
_s(App, "bsYwNJAcI2cV6W75urp8P8f5nbA=", false, function() {
  return [useLoaderData, useNavigation, useSubmit];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-G57BRBCO.js.map
