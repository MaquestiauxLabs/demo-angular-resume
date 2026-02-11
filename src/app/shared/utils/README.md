# Utility Functions

This directory contains utility functions and helpers that provide common functionality across the application.

## Purpose

Utilities provide pure functions for common operations:

- Data transformation
- Validation
- Formatting
- Calculation
- Type guards
- Array/object manipulation

## Common Utilities

- `date.utils.ts` - Date manipulation and formatting
- `string.utils.ts` - String manipulation and validation
- `array.utils.ts` - Array operations and transformations
- `validation.utils.ts` - Form validation helpers
- `storage.utils.ts` - Local storage operations
- `type-guards.ts` - TypeScript type guards

## Benefits

- **Testability** - Pure functions are easy to unit test
- **Reusability** - Use throughout the application
- **Maintainability** - Centralized common logic
- **Performance** - Optimized utility functions

## Example

```typescript
// date.utils.ts
export function formatDate(date: Date, format: string): string {
  // Implementation
}

export function isDateValid(date: any): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}

// Usage in components
import { formatDate } from '../shared/utils/date.utils';
const formatted = formatDate(new Date(), 'MM/dd/yyyy');
```

## Guidelines

- Keep functions pure (no side effects)
- Use TypeScript generics where appropriate
- Include JSDoc comments for documentation
- Handle edge cases and invalid inputs gracefully
