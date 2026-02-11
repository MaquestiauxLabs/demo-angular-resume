# Image Assets

This directory contains all image files used throughout the application.

## Contents

- Product images
- User avatars and profile pictures
- Illustrations and graphics
- Background images
- Logo files
- Screenshots and demo images

## File Formats

- **WebP** - Modern format with excellent compression
- **JPEG** - Photographs and complex images
- **PNG** - Images with transparency
- **GIF** - Simple animations
- **SVG** - Vector graphics and icons

## Optimization

- Compress images to reduce file size
- Use appropriate formats for different image types
- Implement lazy loading for images below the fold
- Consider responsive images for different screen sizes
- Use CDNs for frequently accessed images

## Usage

```html
<!-- Basic usage -->
<img src="assets/images/logo.png" alt="Application Logo" />

<!-- Responsive images -->
<img
  srcset="
    assets/images/logo-small.webp   480w,
    assets/images/logo-medium.webp  768w,
    assets/images/logo-large.webp  1024w
  "
  sizes="(max-width: 480px) 480px,
            (max-width: 768px) 768px,
            1024px"
  src="assets/images/logo-medium.webp"
  alt="Application Logo"
/>
```

## Guidelines

- Use descriptive file names
- Include alt text for accessibility
- Optimize for web performance
- Consider file naming conventions (e.g., prefix with categories)
- Maintain different sizes for responsive design
