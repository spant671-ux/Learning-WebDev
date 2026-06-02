# 🌐 Learning Web Development

A hands-on learning repository documenting my journey through web development—starting with HTML fundamentals and moving into CSS styling.

---

## 📂 Project Structure

Here is the directory structure of the topics covered in this repository:

```text
Learning-WebDev/
├── Learning HTML/
│   ├── Bookmark Manager/
│   │   └── index.html
│   ├── Entities/
│   │   └── index.htm
│   ├── First Page/
│   │   └── index.html
│   ├── Forms and Input Tags/
│   │   ├── index.htm
│   │   └── practice.htm
│   ├── Id & Classes/
│   │   ├── index.html
│   │   └── style.css
│   ├── Image, Lists and Tables/
│   │   ├── Image in HTML/
│   │   │   ├── image.jpg
│   │   │   └── index.html
│   │   └── table/
│   │       ├── style.css
│   │       └── table&lists.htm
│   ├── Inline and Block Elements/
│   │   ├── index.html
│   │   └── style.css
│   ├── Semantic Tags/
│   │   └── index.html
│   └── Video, Audio and HTML/
│       ├── audio.mp3
│       ├── image.jpg
│       ├── index.html
│       └── video.mp4
└── Learning CSS/
    ├── Box Model/
    │   └── index.htm
    ├── Inline, Internal and External Stylesheets/
    │   ├── index.html
    │   └── style.css
    └── Typography/
        └── index.html
```

---

## 📘 Topics Covered

### 1. 🏗️ HTML Basics (`/Learning HTML`)

*   **First Page**: Basic structure of an HTML5 document (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta>` tags for character encoding and responsive viewports).
*   **Bookmark Manager**: Structuring headers (`<h1>` to `<h6>`), hyperlinks (`<a>`), opening links in a new window/tab using `target="_blank"`, and content organization.
*   **Entities**: Learning and using HTML entity characters (like `&lt;`, `&gt;`, `&amp;`) for escaping symbols.
*   **Forms and Input Tags**: Building interactive forms using `<form>`, text inputs, radio buttons, checkboxes, dropdown selectors (`<select>` and `<option>`), textareas, labels associated via the `for` attribute, and standard attributes like `placeholder`, `name`, and `id`. Also contains `practice.htm` for hands-on practice.
*   **Id & Classes**: Understanding how to use the global `id` (unique identifier) and `class` (style grouping identifier) attributes to target elements in external CSS.
*   **Image, Lists and Tables**:
    *   *Images*: Embedding image assets with the `<img>` tag, setting height and width, and writing descriptive alt text for accessibility.
    *   *Tables*: Building structured tables using `<table>`, `<tr>`, `<th>`, and `<td>` with semantic wrappers (`<thead>`, `<tbody>`), captions, and attributes like `rowspan` and `colspan`.
    *   *Lists*: Formatting unordered (`<ul>`), ordered (`<ol>`), and description (`<dl>`, `<dt>`, `<dd>`) lists.
*   **Inline and Block Elements**: Deep-dive into HTML display behavior, contrasting block-level containers (like `<div>` and `<p>`) with inline containers (like `<span>` and `<a>`).
*   **Semantic Tags**: Constructing readable, accessible layouts using HTML5 semantic elements like `<header>`, `<nav>`, `<main>`, and `<footer>`.
*   **Video, Audio and HTML**: Incorporating rich media elements, including the `<video>` player (with attributes for size, control, loop, and posters), `<audio>` player, embedding scalable vector graphics (`<svg>`), and embedding remote sites/videos using `<iframe>`.

---

### 2. 🎨 CSS Fundamentals (`/Learning CSS`)

*   **Inline, Internal and External Stylesheets**: Comparing the three approaches to styling web pages, and demonstrating fundamental CSS selector systems:
    *   Element Selectors (`p`)
    *   ID Selectors (`#article1`)
    *   Class Selectors (`.paraClass`)
    *   Grouping Selectors (`p, article`)
    *   Specificity / Chained Selectors (`p.paraClass`)
*   **Box Model**: Working with the layout engine's spacing properties—`width`, `height`, `border` (with thickness, style, color, and curved corners using `border-radius`), `padding`, and `margin`.
*   **Typography**: Styling text using `font-family` (system/fallback stacks), `font-size`, `font-weight`, and `line-height`. Explores standard CSS color models:
    *   Named colors (e.g., `yellow`)
    *   RGB & RGBA (Red, Green, Blue, Alpha transparency)
    *   Hexadecimal codes (e.g., `#e12985`)
    *   HSL (Hue, Saturation, Lightness)

---

## 🛠️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/spant671-ux/Learning-WebDev.git
   ```
2. **Open the files:**
   Since this is a client-side learning project, you don't need to run a server. Simply locate any `.html` or `.htm` file on your filesystem and double-click to open it in your browser of choice.

---

## 🚀 Learning Progress

*   **Completed:** HTML Basics
*   **Currently Learning:** CSS Fundamentals 🎨
*   **Up Next:** JavaScript Basics ⚡