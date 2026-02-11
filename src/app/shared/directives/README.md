# Custom Directives

This directory contains custom Angular directives that extend HTML functionality or modify DOM behavior.

## Purpose

Custom directives provide reusable DOM manipulation and behavior:

- Event handling
- Attribute manipulation
- Structural changes
- Styling modifications
- Accessibility improvements

## Common Directives

- `ClickOutsideDirective` - Detect clicks outside an element
- `LazyLoadDirective` - Lazy load images or content
- `TooltipDirective` - Show tooltips on hover
- `AutofocusDirective` - Auto-focus input elements
- `DisableOnSubmitDirective` - Disable buttons during form submission

## Implementation

Directives can be:

- **Attribute directives** - Modify element behavior or appearance
- **Structural directives** - Modify DOM structure (`*ngIf`, `*ngFor` style)

## Example

```typescript
@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    // Implementation
  }
}
```
