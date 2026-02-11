# Public Assets

This folder contains static assets that are served as-is by the application.

## Contents

- Static files like images, fonts, and icons
- Files that need to be publicly accessible via URL
- Assets that don't require processing during build

## Usage

Files in this directory are copied directly to the build output and can be accessed via the root URL of the application (e.g., `/logo.png`).

## Notes

- Do not put TypeScript or Angular component files here
- Use `src/assets` for assets that should be processed by the build system