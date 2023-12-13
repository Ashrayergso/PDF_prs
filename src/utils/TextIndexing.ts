```typescript
import { Llama_index } from 'llama_index';
import { Text } from '../types';

export class TextIndexing {
  private index: Llama_index;

  constructor() {
    this.index = new Llama_index();
  }

  public indexText(text: Text[]): void {
    text.forEach((textItem) => {
      this.index.addDocument(textItem);
    });
  }

  public searchIndex(query: string): Text[] {
    return this.index.search(query);
  }
}
```