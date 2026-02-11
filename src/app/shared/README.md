# Shared Module

This directory contains reusable components, directives, pipes, and utilities that can be used across the entire application.

## Purpose

The shared module promotes code reuse and consistency by providing:

- Reusable UI components
- Custom directives
- Custom pipes
- Utility functions
- Common interfaces and models

## Structure

- `directives/` - Custom Angular directives
- `pipes/` - Custom pipes for data transformation
- `ui/` - Reusable UI components
- `utils/` - Utility functions and helpers

## Benefits

- **DRY Principle** - Avoid code duplication
- **Consistency** - Uniform behavior across the application
- **Maintainability** - Changes in one place affect all usages
- **Testing** - Test shared code once

## Usage

Import the shared module in feature modules:

```typescript
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  // ...
})
export class FeatureModule {}
```

## Guidelines

- Only include truly shared functionality
- Avoid application-specific logic
- Keep components generic and configurable
- Document component APIs and usage
