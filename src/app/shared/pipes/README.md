# Custom Pipes

This directory contains custom Angular pipes for data transformation and formatting.

## Purpose

Custom pipes provide reusable data transformation logic:

- Date formatting
- Number formatting
- String manipulation
- Array filtering and sorting
- Data conversion

## Common Pipes

- `SafeHtmlPipe` - Safely render HTML content
- `RelativeTimePipe` - Display relative time (e.g., "2 hours ago")
- `CurrencyPipe` - Format currency values
- `SearchFilterPipe` - Filter arrays based on search terms
- `FileSizePipe` - Format file sizes (KB, MB, GB)

## Usage

Use pipes in templates with the pipe operator:

```html
<!-- Transform data in template -->
<p>{{ user.createdAt | relativeTime }}</p>
<span>{{ fileSize | fileSizePipe }}</span>

<!-- Chain pipes -->
<div>{{ content | safeHtml | truncate:100 }}</div>
```

## Implementation

Pipes implement the `PipeTransform` interface:

```typescript
@Pipe({
  name: 'relativeTime',
  standalone: true,
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: Date): string {
    // Implementation
  }
}
```
