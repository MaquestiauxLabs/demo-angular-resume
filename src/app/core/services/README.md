# Core Services

This directory contains singleton services that provide application-wide functionality and state management.

## Purpose

Core services are instantiated once and shared across the entire application. They typically handle:

- Authentication and authorization
- Global state management
- Logging and analytics
- Data caching and synchronization
- API communication
- Application settings

## Common Services

- `AuthService` - User authentication and session management
- `ApiService` - HTTP client for API communication
- `StorageService` - Local storage operations
- `LoggingService` - Application logging
- `AnalyticsService` - Tracking and analytics

## Implementation

Core services should:

- Be provided in the root injector (`providedIn: 'root'`)
- Use RxJS for asynchronous operations
- Handle errors appropriately
- Be properly typed with TypeScript

## Example

```typescript
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<User> {
    // Implementation
  }
}
```
