# Layout Components

This directory contains layout components that define the overall structure and appearance of the application.

## Purpose

Layout components provide the visual framework for the application:

- Header and navigation
- Sidebar and menus
- Footer
- Page containers
- Responsive layouts

## Common Layout Components

- `HeaderComponent` - Top navigation bar
- `SidebarComponent` - Side navigation menu
- `FooterComponent` - Application footer
- `MainLayoutComponent` - Overall page layout
- `PageContainerComponent` - Content wrapper with consistent spacing

## Usage

Layout components are used in routing configurations:

```typescript
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];
```

## Design Principles

- Components should be responsive and accessible
- Use semantic HTML5 elements
- Implement consistent spacing and typography
- Support dark/light themes if applicable
- Handle mobile and desktop layouts gracefully
