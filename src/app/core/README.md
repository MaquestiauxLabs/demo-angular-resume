# Core Module

This directory contains singleton services and application-wide configurations that are instantiated only once during the application lifecycle.

## Purpose

The core module provides:

- Application-wide services (singletons)
- Global configuration objects
- Security interceptors and guards
- Data models and interfaces used throughout the app

## Structure

- `configs/` - Configuration objects and constants
- `guards/` - Route and authentication guards
- `interceptors/` - HTTP interceptors for requests/responses
- `services/` - Singleton services (auth, logging, etc.)

## Usage

Core services are typically provided in the root injector and can be injected anywhere in the application:

```typescript
import { AuthService } from './core/services/auth.service';

constructor(private authService: AuthService) { }
```

## Guidelines

- Only add services that need to be singletons
- Avoid feature-specific business logic here
- Core module should be imported only once in the app module
