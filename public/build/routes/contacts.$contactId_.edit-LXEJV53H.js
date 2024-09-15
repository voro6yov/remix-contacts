import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigate
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

// app/routes/contacts.$contactId_.edit.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_node = __toESM(require_node(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contacts.$contactId_.edit.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contacts.$contactId_.edit.js"
  );
  import.meta.hot.lastModified = "1726414304072.001";
}
function EditContact() {
  _s();
  const {
    contact
  } = useLoaderData();
  const navigate = useNavigate();
  return (0, import_jsx_runtime.jsxs)(Form, {
    id: "contact-form",
    method: "post",
    children: [(0, import_jsx_runtime.jsxs)("p", {
      children: [(0, import_jsx_runtime.jsx)("span", {
        children: "Name"
      }), (0, import_jsx_runtime.jsx)("input", {
        defaultValue: contact.first,
        "aria-label": "First name",
        name: "first",
        type: "text",
        placeholder: "First"
      }), (0, import_jsx_runtime.jsx)("input", {
        "aria-label": "Last name",
        defaultValue: contact.last,
        name: "last",
        placeholder: "Last",
        type: "text"
      })]
    }), (0, import_jsx_runtime.jsxs)("label", {
      children: [(0, import_jsx_runtime.jsx)("span", {
        children: "Twitter"
      }), (0, import_jsx_runtime.jsx)("input", {
        defaultValue: contact.twitter,
        name: "twitter",
        placeholder: "@jack",
        type: "text"
      })]
    }), (0, import_jsx_runtime.jsxs)("label", {
      children: [(0, import_jsx_runtime.jsx)("span", {
        children: "Avatar URL"
      }), (0, import_jsx_runtime.jsx)("input", {
        "aria-label": "Avatar URL",
        defaultValue: contact.avatar,
        name: "avatar",
        placeholder: "https://example.com/avatar.jpg",
        type: "text"
      })]
    }), (0, import_jsx_runtime.jsxs)("label", {
      children: [(0, import_jsx_runtime.jsx)("span", {
        children: "Notes"
      }), (0, import_jsx_runtime.jsx)("textarea", {
        defaultValue: contact.notes,
        name: "notes",
        rows: 6
      })]
    }), (0, import_jsx_runtime.jsxs)("p", {
      children: [(0, import_jsx_runtime.jsx)("button", {
        type: "submit",
        children: "Save"
      }), (0, import_jsx_runtime.jsx)("button", {
        onClick: () => navigate(-1),
        type: "button",
        children: "Cancel"
      })]
    })]
  }, contact.id);
}
_s(EditContact, "hNBbUOQ8Y0dVUNq/e/mHDN0KVVU=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = EditContact;
var _c;
$RefreshReg$(_c, "EditContact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditContact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactId_.edit-LXEJV53H.js.map
