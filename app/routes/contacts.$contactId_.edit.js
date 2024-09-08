import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import { contactService } from "../entrypoint";
export const action = async ({ params, request }) => {
    invariant(params.contactId, "Missing contactId param");
    const fromData = await request.formData();
    const updates = Object.fromEntries(fromData);
    await contactService.set(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};
export const loader = async ({ params, }) => {
    invariant(params.contactId, "Missing contactId param");
    const contact = await contactService.get(params.contactId);
    if (!contact) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ contact });
};
export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();
    return (_jsxs(Form, { id: "contact-form", method: "post", children: [_jsxs("p", { children: [_jsx("span", { children: "Name" }), _jsx("input", { defaultValue: contact.first, "aria-label": "First name", name: "first", type: "text", placeholder: "First" }), _jsx("input", { "aria-label": "Last name", defaultValue: contact.last, name: "last", placeholder: "Last", type: "text" })] }), _jsxs("label", { children: [_jsx("span", { children: "Twitter" }), _jsx("input", { defaultValue: contact.twitter, name: "twitter", placeholder: "@jack", type: "text" })] }), _jsxs("label", { children: [_jsx("span", { children: "Avatar URL" }), _jsx("input", { "aria-label": "Avatar URL", defaultValue: contact.avatar, name: "avatar", placeholder: "https://example.com/avatar.jpg", type: "text" })] }), _jsxs("label", { children: [_jsx("span", { children: "Notes" }), _jsx("textarea", { defaultValue: contact.notes, name: "notes", rows: 6 })] }), _jsxs("p", { children: [_jsx("button", { type: "submit", children: "Save" }), _jsx("button", { onClick: () => navigate(-1), type: "button", children: "Cancel" })] })] }, contact.id));
}
