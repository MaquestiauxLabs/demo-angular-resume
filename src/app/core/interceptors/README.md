# HTTP Interceptors

This directory contains HTTP interceptors that modify or handle HTTP requests and responses globally.

## Purpose

HTTP interceptors implement the `HttpInterceptor` interface to:

- Add authentication headers to requests
- Log HTTP requests and responses
- Handle errors globally
- Transform request/response data
- Cache HTTP responses
- Show loading indicators

## Common Interceptors

- `AuthInterceptor` - Adds authorization headers
- `ErrorInterceptor` - Handles HTTP errors globally
- `LoggingInterceptor` - Logs HTTP traffic
- `CacheInterceptor` - Caches GET requests
- `LoadingInterceptor` - Shows/hides loading indicators

## Usage

Interceptors are registered in the application providers:

```typescript
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
```

## Order Matters

Interceptors are executed in the order they are provided. The first interceptor receives the request, and the last interceptor receives the response.
