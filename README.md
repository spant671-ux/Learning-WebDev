# 🌐 Learning Web Development

A hands-on learning repository documenting my journey through web development—starting with HTML fundamentals and moving into CSS styling and JavaScript.

---

## 📂 Project Structure

Here is the directory structure of the topics covered in this repository:

```text
Learning-WebDev/
├── Learning HTML/
│   ├── 01_first_page/
│   │   └── index.html
│   ├── 02_inline_block/
│   │   ├── index.html
│   │   └── style.css
│   ├── 03_images_lists_tables/
│   │   ├── images_in_html/
│   │   │   ├── image.jpg
│   │   │   └── index.html
│   │   └── tables/
│   │       ├── style.css
│   │       └── table_lists.html
│   ├── 04_forms_inputs/
│   │   ├── index.html
│   │   └── practice.html
│   ├── 05_ids_classes/
│   │   ├── index.html
│   │   └── style.css
│   ├── 06_semantic_tags/
│   │   └── index.html
│   ├── 07_entities/
│   │   └── index.html
│   ├── 08_multimedia/
│   │   ├── audio.mp3
│   │   ├── image.jpg
│   │   ├── index.html
│   │   └── video.mp4
│   └── 09_bookmark_manager/
│       └── index.html
├── Learning CSS/
│   ├── 01_stylesheets_basics/
│   │   ├── index.html
│   │   └── style.css
│   ├── 02_box_model/
│   │   └── index.html
│   ├── 03_units_in_depth/
│   │   └── index.html
│   ├── 04_typography/
│   │   └── index.html
│   ├── 05_display_properties/
│   │   └── index.html
│   ├── 06_position_properties/
│   │   ├── index.html
│   │   └── [images]
│   ├── 07_float_clear_overflow/
│   │   ├── index.html
│   │   ├── one.html
│   │   └── two.html
│   ├── 08_flexbox/
│   │   └── index.html
│   ├── 09_css_grids/
│   │   ├── grid.html
│   │   ├── index.html
│   │   ├── style.css
│   │   └── styles.css
│   ├── 10_grids_advanced/
│   │   ├── areas.html
│   │   ├── areastyle.css
│   │   ├── index.html
│   │   └── styles.css
│   ├── 11_media_queries_variables/
│   │   ├── index.html
│   │   ├── one.html
│   │   ├── two.html
│   │   └── 1.jpg
│   ├── 12_shadow_effects/
│   │   ├── index.html
│   │   └── 1.jpg
│   ├── 13_2d_transforms/
│   │   ├── index.html
│   │   └── style.css
│   ├── 14_3d_transforms/
│   │   ├── index.html
│   │   └── styles.css
│   ├── 15_transition_effects/
│   │   └── index.html
│   └── 16_css_animations/
│       └── index.html
├── Learning Javascript/
│   └── 01_basics/
│       ├── 01_variables.js
│       ├── 02_datatypes.js
│       ├── 03_conversionOperation.js
│       ├── 04_comparison.js
│       ├── 05_strings.js
│       └── datatypes-summary.js
└── Projects/
    ├── Blogs Website Project using HTML, CSS/
    │   ├── index.htm
    │   └── styles.css
    ├── Calculator using HTML, CSS and JS/
    │   ├── index.html
    │   ├── script.js
    │   └── styles.css
    ├── Cards Project using HTML, CSS/
    │   ├── index.htm
    │   └── style.css
    ├── Recipe Website using HTML, CSS/
    │   ├── index.htm
    │   └── styles.css
    └── StudySync/
        ├── images/
        ├── index.html
        └── styles.css
```

---

## 📘 Topics Covered

### 1. 🏗️ HTML Basics (`/Learning HTML`)

*   **01_first_page**: Basic structure of an HTML5 document (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta>` tags for character encoding and responsive viewports).
*   **02_inline_block**: Deep-dive into HTML display behavior, contrasting block-level containers (like `<div>` and `<p>`) with inline containers (like `<span>` and `<a>`).
*   **03_images_lists_tables**:
    *   *images_in_html*: Embedding image assets with the `<img>` tag, setting height and width, and writing descriptive alt text for accessibility.
    *   *tables*: Building structured tables using `<table>`, `<tr>`, `<th>`, and `<td>` with semantic wrappers (`<thead>`, `<tbody>`), captions, and attributes like `rowspan` and `colspan`.
    *   *Lists*: Formatting unordered (`<ul>`), ordered (`<ol>`), and description (`<dl>`, `<dt>`, `<dd>`) lists.
*   **04_forms_inputs**: Building interactive forms using `<form>`, text inputs, radio buttons, checkboxes, dropdown selectors (`<select>` and `<option>`), textareas, labels associated via the `for` attribute, and standard attributes like `placeholder`, `name`, and `id`. Also contains `practice.html` for hands-on practice.
*   **05_ids_classes**: Understanding how to use the global `id` (unique identifier) and `class` (style grouping identifier) attributes to target elements in external CSS.
*   **06_semantic_tags**: Constructing readable, accessible layouts using HTML5 semantic elements like `<header>`, `<nav>`, `<main>`, and `<footer>`.
*   **07_entities**: Learning and using HTML entity characters (like `&lt;`, `&gt;`, `&amp;`) for escaping symbols.
*   **08_multimedia**: Incorporating rich media elements, including the `<video>` player (with attributes for size, control, loop, and posters), `<audio>` player, embedding scalable vector graphics (`<svg>`), and embedding remote sites/videos using `<iframe>`.
*   **09_bookmark_manager**: Structuring headers (`<h1>` to `<h6>`), hyperlinks (`<a>`), opening links in a new window/tab using `target="_blank"`, and content organization.

---

### 2. 🎨 CSS Fundamentals (`/Learning CSS`)

*   **01_stylesheets_basics**: Comparing the three approaches to styling web pages, and demonstrating fundamental CSS selector systems (Element, ID, Class, Grouping, Chained).
*   **02_box_model**: Spacing properties—`width`, `height`, `border` (with `border-radius`), `padding`, and `margin`.
*   **03_units_in_depth**: Understanding relative and absolute length units including `px`, `%`, `em`, `rem`, `vw`, and `vh`.
*   **04_typography**: Styling text using `font-family`, `font-size`, `font-weight`, `line-height`, and CSS color models (Named, RGB, RGBA, Hex, HSL).
*   **05_display_properties**: Controlling layout behavior with `block`, `inline`, `inline-block`, and `none`.
*   **06_position_properties**: Positioning elements via `static`, `relative`, `absolute`, `fixed`, and `sticky`.
*   **07_float_clear_overflow**: Aligning elements using float properties, clearing floats, and handling text/content overflow.
*   **08_flexbox**: Building flexible, modern responsive structures using Flexbox container and item alignments.
*   **09_css_grids**: Designing advanced two-dimensional layout grids, template columns/rows, alignment, and positioning.
*   **10_grids_advanced**: Understanding grid autofit and minmax properties, grid template areas, and placing items within areas.
*   **11_media_queries_variables**: Declaring CSS custom properties (variables) and applying fluid layout styling responsively using `@media` queries.
*   **12_shadow_effects**: Adding text shadows (`text-shadow`) and box shadows (`box-shadow`) to pages.
*   **13_2d_transforms**: Applying scaling, rotation, translation, and skewing via the `transform` property.
*   **14_3d_transforms**: Creating 3D card flips and multi-dimensional transforms.
*   **15_transition_effects**: Styling smooth hover and state animations using transition durations, delays, and timing functions.
*   **16_css_animations**: Creating rich, customized multi-step keyframe animations.

---

### 3. ⚡ JavaScript Basics (`/Learning Javascript`)

*   **01_basics**: Fundamentals of JavaScript:
    *   *01_variables.js*: Variable declarations using `const`, `let`, and `var`.
    *   *02_datatypes.js*: Primitive and non-primitive data types.
    *   *03_conversionOperation.js*: Dynamic type conversions and operators.
    *   *04_comparison.js*: Comparison operators and strict equality.
    *   *05_strings.js*: String manipulation, interpolation, and properties.
    *   *datatypes-summary.js*: In-depth reference on data type storage and memory allocation.

---

### 4. 🚀 Projects (`/Projects`)

*   **Blogs Website Project using HTML, CSS**: A responsive blog website layout featuring a grid of blog cards with images, titles, descriptions, and author information. Built with semantic HTML and modern CSS Grid/Flexbox.
*   **Recipe Website using HTML, CSS**: A structured recipe page showcasing ingredients, instructions, and images.
*   **Cards Project using HTML, CSS**: A collection of stylized cards for displaying content.
*   **Calculator using HTML, CSS and JS**: A functional calculator application with an interactive UI and basic mathematical calculations handled via JavaScript.
*   **StudySync**: A fully responsive landing page for a seamless learning platform. Built using semantic HTML5 and vanilla CSS. Responsiveness is achieved purely through custom variables, CSS Flexbox, CSS Grid, and custom media queries.

---

## 🛠️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/spant671-ux/Learning-WebDev.git
   ```
2. **Open the files:**
   Since this is a client-side learning project, you don't need to run a server. Simply locate any `.html` file on your filesystem and double-click to open it in your browser of choice.

---

## 🚀 Learning Progress

*   **Completed:** HTML Basics & CSS Fundamentals 🎨
*   **Currently Learning:** JavaScript Basics ⚡