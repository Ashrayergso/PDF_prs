```typescript
import { ParsedText } from '../types/index';

export function extractHighlights(parsedText: ParsedText): string[] {
    // This is a placeholder for the actual implementation.
    // The actual implementation would use some form of NLP or text analysis to determine the key highlights.
    // For now, we'll just return the first sentence of each paragraph as a "highlight".
    return parsedText.map(paragraph => paragraph.split('.')[0]);
}
```