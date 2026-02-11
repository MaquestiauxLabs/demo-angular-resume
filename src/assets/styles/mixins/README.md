# SCSS Mixins

This directory contains reusable SCSS mixins that encapsulate common styling patterns.

## Purpose

Mixins provide reusable style patterns that can be included throughout the application:

- Responsive design patterns
- Animation keyframes
- Common UI patterns
- Browser compatibility fixes
- Utility styles

## Common Mixins

- `responsive.scss` - Media query breakpoints
- `flexbox.scss` - Flexbox layout utilities
- `transitions.scss` - Animation and transition helpers
- `typography.scss` - Text styling patterns
- `buttons.scss` - Button styling variants

## Usage

Mixins are included using the `@include` directive:

```scss
@import 'styles/mixins/responsive';
@import 'styles/mixins/buttons';

.component {
  @include responsive-tablet {
    flex-direction: column;
  }

  @include button-primary;
  @include transition-smooth;
}
```

## Benefits

- **DRY Principle** - Avoid code repetition
- **Consistency** - Uniform behavior across components
- **Maintainability** - Changes in one place affect all usages
- **Browser Support** - Handle vendor prefixes automatically

## Guidelines

- Keep mixins focused on single responsibilities
- Use descriptive names
- Include parameter validation where applicable
- Document mixin parameters and usage
- Consider performance impact of complex mixins
