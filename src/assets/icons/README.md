# Icon Assets

This directory contains icon files used throughout the application.

## Contents

- SVG icons for scalable graphics
- PNG icons for legacy browser support
- Icon sets (e.g., Material Icons, Font Awesome)
- Custom application icons

## File Formats

- **SVG** - Preferred format for scalability and small file size
- **PNG** - Fallback for older browsers
- **ICO** - Favicon files for browser tabs

## Usage

Icons can be referenced in templates or loaded dynamically:

```html
<!-- Direct reference -->
<img src="assets/icons/user.svg" alt="User" />

<!-- SVG sprite usage -->
<svg class="icon">
  <use href="assets/icons/sprite.svg#user"></use>
</svg>

<!-- Component usage -->
<app-icon name="user" size="24"></app-icon>
```

## Best Practices

- Use SVG for better performance and scalability
- Include descriptive alt text for accessibility
- Optimize files to reduce bundle size
- Maintain consistent sizing and style
- Use semantic naming conventions
