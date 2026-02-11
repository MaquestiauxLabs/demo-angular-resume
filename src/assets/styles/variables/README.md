# SCSS Variables

This directory contains SCSS variables that define the design system and theme for the application.

## Purpose

Variables provide centralized control over the visual design:

- Color palettes
- Typography scales
- Spacing systems
- Breakpoint definitions
- Animation timings
- Border radius and shadows

## Variable Categories

- **Colors** - Brand colors, semantic colors, grays
- **Typography** - Font families, sizes, line heights
- **Spacing** - Margin/padding scale
- **Breakpoints** - Responsive design points
- **Shadows** - Elevation and depth
- **Animations** - Durations and easing functions

## Usage

Variables are imported and used throughout the application:

```scss
@import 'styles/variables/colors';
@import 'styles/variables/typography';

.button {
  background-color: $primary-color;
  padding: $spacing-md;
  font-size: $font-size-base;

  @include responsive-tablet {
    padding: $spacing-lg;
  }
}
```

## Benefits

- **Consistency** - Unified design language
- **Theming** - Easy to create multiple themes
- **Maintainability** - Update design system centrally
- **Collaboration** - Designers can work with defined tokens

## Guidelines

- Use semantic naming (e.g., `$color-primary` vs `$color-blue-500`)
- Document variable purposes and usage
- Group related variables together
- Consider CSS custom properties for runtime theming
- Maintain versioning for design system updates
