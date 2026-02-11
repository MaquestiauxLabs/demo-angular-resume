# Application Styles

This directory contains all stylesheet files that define the visual appearance of the application.

## Structure

- `base/` - Base styles and resets
- `mixins/` - Reusable SCSS mixins
- `variables/` - SCSS variables for theming

## Organization

The styles are organized following the 7-1 architecture pattern adapted for Angular:

- **Base styles** - Resets, typography, and global styles
- **Mixins** - Reusable style functions
- **Variables** - Design tokens (colors, spacing, typography)

## Usage

Styles are imported through the main stylesheet or component-specific styles:

```scss
// Main SCSS file
@import 'styles/variables/colors';
@import 'styles/variables/typography';
@import 'styles/mixins/responsive';
@import 'styles/base/reset';
```

## Best Practices

- Use SCSS variables for consistency
- Implement responsive design with breakpoints
- Follow BEM or similar naming conventions
- Use mixins for common patterns
- Maintain CSS specificity discipline
- Consider CSS custom properties for theming
