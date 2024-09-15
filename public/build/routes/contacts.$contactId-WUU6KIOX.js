import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-ISENFNV5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  createHotContext
} from "/build/_shared/chunk-B23UVFNR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contacts.$contactId.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_node = __toESM(require_node(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contacts.$contactId.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contacts.$contactId.js"
  );
  import.meta.hot.lastModified = "1726415418016.4412";
}
function Contact() {
  _s();
  const {
    contact
  } = useLoaderData();
  return (0, import_jsx_runtime.jsxs)("div", {
    id: "contact",
    children: [(0, import_jsx_runtime.jsx)("div", {
      children: (0, import_jsx_runtime.jsx)("img", {
        alt: `${contact.first} ${contact.last} avatar`,
        src: contact.avatar
      }, contact.avatar)
    }), (0, import_jsx_runtime.jsxs)("div", {
      children: [(0, import_jsx_runtime.jsxs)("h1", {
        children: [contact.first || contact.last ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [contact.first, " ", contact.last]
        }) : (0, import_jsx_runtime.jsx)("i", {
          children: "No Name"
        }), " ", (0, import_jsx_runtime.jsx)(Favorite, {
          contact
        })]
      }), contact.twitter ? (0, import_jsx_runtime.jsx)("p", {
        children: (0, import_jsx_runtime.jsx)("a", {
          href: `https://twitter.com/${contact.twitter}`,
          children: contact.twitter
        })
      }) : null, contact.notes ? (0, import_jsx_runtime.jsx)("p", {
        children: contact.notes
      }) : null, (0, import_jsx_runtime.jsxs)("div", {
        children: [(0, import_jsx_runtime.jsx)(Form, {
          action: "edit",
          children: (0, import_jsx_runtime.jsx)("button", {
            type: "submit",
            children: "Edit"
          })
        }), (0, import_jsx_runtime.jsx)(Form, {
          action: "destroy",
          method: "post",
          onSubmit: (event) => {
            const response = confirm("Please confirm you want to delete this record.");
            if (!response) {
              event.preventDefault();
            }
          },
          children: (0, import_jsx_runtime.jsx)("button", {
            type: "submit",
            children: "Delete"
          })
        })]
      })]
    })]
  });
}
_s(Contact, "fVXFZ2DHJWBPDlTt0dS34HtRFN4=", false, function() {
  return [useLoaderData];
});
_c = Contact;
var Favorite = ({
  contact
}) => {
  _s2();
  const fetcher = useFetcher();
  const favorite = fetcher.formData ? fetcher.formData.get("favorite") === "true" : contact.favorite;
  return (0, import_jsx_runtime.jsx)(fetcher.Form, {
    method: "post",
    children: (0, import_jsx_runtime.jsx)("button", {
      "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
      name: "favorite",
      value: favorite ? "false" : "true",
      children: favorite ? "\u2605" : "\u2606"
    })
  });
};
_s2(Favorite, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c2 = Favorite;
var _c;
var _c2;
$RefreshReg$(_c, "Contact");
$RefreshReg$(_c2, "Favorite");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactId-WUU6KIOX.js.map
