```typescript
import { ParsedText } from '../types/index';

/**
 * Function to split the parsed text into sentences.
 * @param parsedText - The parsed text from the document.
 * @returns An array of sentences.
 */
export function splitTextIntoSentences(parsedText: ParsedText): string[] {
  const sentences = parsedText.content.split('. ');
  return sentences;
}
```