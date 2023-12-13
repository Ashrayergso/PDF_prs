```typescript
import { Text } from '../types';

export function splitText(parsedText: string): Text[] {
    const sentences = parsedText.match(/[^\.!\?]+[\.!\?]+/g);
    return sentences ? sentences.map((sentence, index) => ({ id: index, text: sentence.trim() })) : [];
}
```