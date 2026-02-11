# Base Styles

This directory contains foundational styles that apply to the entire application.

## Contents

- CSS resets or normalizations
- Base HTML element styling
- Global typography rules
- Universal box-sizing and layout
- Print stylesheets

## Files

- `_reset.scss` - CSS reset or normalize
- `_typography.scss` - Base font styles and text sizing
- `_layout.scss` - Global layout rules (body, html)
- `_print.scss` - Print-specific styles

## Usage

Base styles are imported first in the main stylesheet to establish the foundation:

```scss
// main.scss
@import 'styles/base/reset';
@import 'styles/base/typography';
@import 'styles/base/layout';
```

## Guidelines

- Keep selectors minimal and high-level
- Avoid overly specific selectors
- Focus on HTML elements and global classes
- Don't include component-specific styles here
- Ensure cross-browser compatibility
- Test with different screen sizes and devices
