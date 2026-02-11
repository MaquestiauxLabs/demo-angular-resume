# Route Guards

This directory contains route guards that control navigation and access to different parts of the application.

## Purpose

Route guards implement the `CanActivate`, `CanActivateChild`, `CanDeactivate`, or `CanLoad` interfaces to protect routes and control user access.

## Common Guards

- `AuthGuard` - Protects routes that require authentication
- `RoleGuard` - Restricts access based on user roles
- `PermissionGuard` - Checks specific permissions
- `UnsavedChangesGuard` - Warns users before leaving with unsaved changes

## Usage

Guards are applied in the route configuration:

```typescript
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
];
```

## Implementation

Each guard implements specific interfaces:

- `CanActivate` - Controls access to a route
- `CanActivateChild` - Controls access to child routes
- `CanDeactivate` - Controls navigation away from a route
- `CanLoad` - Controls lazy loading of feature modules
