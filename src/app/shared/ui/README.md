# Shared UI Components

This directory contains reusable UI components that can be used across the entire application.

## Purpose

Shared UI components provide consistent visual elements:

- Form controls (inputs, buttons, selects)
- Display components (cards, modals, tables)
- Navigation components
- Feedback components (alerts, loaders)
- Layout utilities

## Common Components

- `ButtonComponent` - Styled button with variants
- `InputComponent` - Form input with validation
- `ModalComponent` - Reusable modal/dialog
- `CardComponent` - Content container with styling
- `SpinnerComponent` - Loading indicator
- `AlertComponent` - Success/error/info messages

## Design System

Components should follow a consistent design system:

- Unified color palette
- Consistent spacing and typography
- Responsive design principles
- Accessibility standards (ARIA attributes)
- Theme support (light/dark modes)

## Usage

Import and use in feature components:

```typescript
import { ButtonComponent } from '../shared/ui/button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: ` <app-button (click)="handleClick()"> Click me </app-button> `,
})
export class MyComponent {}
```
