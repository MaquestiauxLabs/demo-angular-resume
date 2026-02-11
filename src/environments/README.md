# Environment Configuration

This folder contains environment-specific configuration files for the Angular application.

## Files

- `environment.ts` - Default/development environment configuration
- `environment.prod.ts` - Production environment configuration
- Additional environment files (e.g., `environment.staging.ts`)

## Usage

Environment configurations are used to store variables that change between different deployment environments:

- API endpoints
- Feature flags
- Debug settings
- Third-party service keys

## Building

Use the `--configuration` flag to build with a specific environment:

```bash
ng build --configuration production
```

## Security

Never store sensitive information like passwords or secret keys in environment files, as they are bundled into the client-side JavaScript.
