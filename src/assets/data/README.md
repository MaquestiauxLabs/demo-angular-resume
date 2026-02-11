# Static Data

This directory contains static data files used by the application, such as JSON configurations, mock data, or reference data.

## Contents

- JSON configuration files
- Mock data for development and testing
- Reference data (e.g., country codes, categories)
- Default data for application initialization

## Usage

Data files can be imported and used throughout the application:

```typescript
import mockUsers from '../../../assets/data/mock-users.json';
import { APP_CONFIG } from '../../../assets/data/config.json';
```

## Benefits

- **Development** - Provides realistic data during development
- **Testing** - Consistent test data across test suites
- **Offline Support** - Static data works without API calls
- **Performance** - No network requests for reference data

## Guidelines

- Keep file sizes reasonable for performance
- Use JSON format for structured data
- Update mock data when API contracts change
- Consider environment-specific data files
