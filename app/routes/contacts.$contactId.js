import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useFetcher } from "@remix-run/react";
import invariant from "tiny-invariant";
import { contactService } from "../entrypoint";
export const loader = async ({ params }) => {
    invariant(params.contactId, "Missing contactId parameter");
    const contact = await contactService.get(params.contactId);
    if (!contact) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ contact });
};
export const action = async ({ params, request, }) => {
    invariant(params.contactId, "Missing contactId param");
    const formData = await request.formData();
    return contactService.set(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
};
export default function Contact() {
    const { contact } = useLoaderData();
    return (_jsxs("div", { id: "contact", children: [_jsx("div", { children: _jsx("img", { alt: `${contact.first} ${contact.last} avatar`, src: contact.avatar }, contact.avatar) }), _jsxs("div", { children: [_jsxs("h1", { children: [contact.first || contact.last ? (_jsxs(_Fragment, { children: [contact.first, " ", contact.last] })) : (_jsx("i", { children: "No Name" })), " ", _jsx(Favorite, { contact: contact })] }), contact.twitter ? (_jsx("p", { children: _jsx("a", { href: `https://twitter.com/${contact.twitter}`, children: contact.twitter }) })) : null, contact.notes ? _jsx("p", { children: contact.notes }) : null, _jsxs("div", { children: [_jsx(Form, { action: "edit", children: _jsx("button", { type: "submit", children: "Edit" }) }), _jsx(Form, { action: "destroy", method: "post", onSubmit: (event) => {
                                    const response = confirm("Please confirm you want to delete this record.");
                                    if (!response) {
                                        event.preventDefault();
                                    }
                                }, children: _jsx("button", { type: "submit", children: "Delete" }) })] })] })] }));
}
const Favorite = ({ contact }) => {
    const fetcher = useFetcher();
    const favorite = fetcher.formData
        ? fetcher.formData.get("favorite") === "true"
        : contact.favorite;
    return (_jsx(fetcher.Form, { method: "post", children: _jsx("button", { "aria-label": favorite
                ? "Remove from favorites"
                : "Add to favorites", name: "favorite", value: favorite ? "false" : "true", children: favorite ? "★" : "☆" }) }));
};
