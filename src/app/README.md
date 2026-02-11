# Main Application Module

This is the root module and main entry point of the Angular application.

## Structure

The `app` directory contains the core application structure organized following Angular best practices:

- `core/` - Singleton services and one-time app-wide configurations
- `features/` - Feature modules organized by business domain
- `layout/` - Layout components and containers
- `shared/` - Reusable components, pipes, directives, and utilities

## Main Components

- `app.component.ts` - Root component of the application
- `app.config.ts` - Application configuration and providers
- `app.routes.ts` - Root routing configuration

## Module Organization

This structure promotes:

- **Separation of concerns** - Clear boundaries between different types of code
- **Reusability** - Shared components can be used across features
- **Maintainability** - Related code is grouped together
- **Scalability** - Easy to add new features without affecting existing code
