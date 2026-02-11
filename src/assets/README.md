# Application Assets

This folder contains static assets that are processed during the build process.

## Contents

- Images and icons
- Stylesheets (SCSS/CSS files)
- Font files
- Configuration files
- Other static resources used by the application

## Usage

Assets in this directory are included in the build bundle and can be referenced in your components using relative paths or through the `assets` array in `angular.json`.

## Reference

You can reference assets in your components:

```typescript
// Example: referencing an image
imageUrl: string = 'assets/images/logo.png';
```

Or in templates:

```html
<img src="assets/icons/user.svg" alt="User Icon" />
```
