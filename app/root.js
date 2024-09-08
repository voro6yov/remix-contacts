import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { json, redirect } from "@remix-run/node";
import { Form, Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, useLoaderData, useNavigation, useSubmit, } from "@remix-run/react";
import { useEffect } from "react";
import appStylesHref from "./app.css?url";
import { contactService } from "./entrypoint";
export const links = () => [
    { rel: "stylesheet", href: appStylesHref },
];
export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await contactService.getAll(q);
    return json({ contacts, q });
};
export const action = async () => {
    const contact = await contactService.create();
    return redirect(`/contacts/${contact.id}/edit`);
};
export default function App() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    useEffect(() => {
        const searchField = document.getElementById("q");
        if (searchField instanceof HTMLInputElement) {
            searchField.value = q || "";
        }
    });
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { children: [_jsxs("div", { id: "sidebar", children: [_jsx("h1", { children: "Remix Contacts" }), _jsxs("div", { children: [_jsxs(Form, { id: "search-form", onChange: (event) => { const isFirstSearch = q === null; submit(event.currentTarget, { replace: !isFirstSearch }); }, role: "search", children: [_jsx("input", { id: "q", "aria-label": "Search contacts", className: searching ? "loading" : "", defaultValue: q || "", placeholder: "Search", type: "search", name: "q" }), _jsx("div", { id: "search-spinner", "aria-hidden": true, hidden: !searching })] }), _jsx(Form, { method: "post", children: _jsx("button", { type: "submit", children: "New" }) })] }), _jsx("nav", { children: contacts.length ? (_jsx("ul", { children: contacts.map((contact) => (_jsx("li", { children: _jsx(NavLink, { className: ({ isActive, isPending }) => isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : "", to: `contacts/${contact.id}`, children: _jsxs(Link, { to: `contacts/${contact.id}`, children: [contact.first || contact.last ? (_jsxs(_Fragment, { children: [contact.first, " ", contact.last] })) : (_jsx("i", { children: "No Name" })), " ", contact.favorite ? (_jsx("span", { children: "\u2605" })) : null] }) }) }, contact.id))) })) : (_jsx("p", { children: _jsx("i", { children: "No contacts" }) })) })] }), _jsx("div", { className: navigation.state === "loading" && !searching ? "loading" : "", id: "detail", children: _jsx(Outlet, {}) }), _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}
