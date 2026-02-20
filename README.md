# umbraco-custom-rte
A custom Rich Text Editor (RTE) extension for Umbraco that disables HTML validation to preserve complex, nested HTML structures.

# Umbraco Custom RTE - HTML Preservation Extension

This is a custom Rich Text Editor (RTE) extension for the Umbraco CMS (v14+) that allows for full preservation of complex and nested HTML.

## The Problem

The default Umbraco Rich Text Editor is built on Tiptap and uses a strict schema to ensure valid content. While this is great for structured content, it can be restrictive when you need to paste complex, pre-formatted HTML. The default editor will often:
*   Strip out unrecognized attributes.
*   "Correct" nested structures, like `<span>` tags inside other `<span>` tags.
*   Conflict with custom link (`<a>`) and image (`<img>`) structures.

This results in your carefully crafted HTML being automatically and undesirably changed upon saving.

## The Solution

This extension provides a set of custom Tiptap nodes that override the default behavior for common HTML tags. It is designed to be highly permissive, ensuring that your HTML is preserved exactly as you entered it.

### Key Features
*   **Preserves All Attributes:** Keeps all original attributes (`class`, `id`, `style`, `data-*`, etc.) on `div`, `h1`, `span`, and `a` tags.
*   **Allows Complex Nesting:** The schema is explicitly configured to allow complex nesting, such as `<span>` tags within other `<span>` tags, or `<a>` tags containing images and spans.
*   **Prevents HTML "Correction":** By defining high-priority parsing rules, it ensures that your custom HTML structure is respected and not flattened or altered by the editor.
*   **Works Alongside Umbraco:** It's designed to work seamlessly once Umbraco's conflicting core "Link" capability is disabled on the specific data type.

This provides a "what you see is what you get" experience for developers and content editors who need to work with intricate HTML snippets.

## Installation and Usage

1.  **Copy the Plugin:** Place the `CustomRTE` folder into your Umbraco project's `/App_Plugins` directory.
2.  **Build the Extension:** Navigate to `/App_Plugins/CustomRTE/client` in your terminal and run `npm install` followed by `npm run build`.
3.  **Configure the Data Type:**
    *   In the Umbraco backoffice, go to **Settings** -> **Data Types**.
    *   Select or create a Rich Text Editor data type.
    *   Under **Capabilities**, ensure the **Custom Div Preserver** extension is enabled.
    *   **Crucially**, to prevent conflicts, **uncheck** the built-in **Link** capability.
4.  **Restart Umbraco:** Restart your application to ensure the new plugin is loaded.

You can now use this Rich Text Editor data type on your document types, and it will preserve your complex HTML.
