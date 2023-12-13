```typescript
import { Llama } from 'llama_index';
import { Document } from '../types';

export class DocumentIngestion {
  private llama: Llama;

  constructor() {
    this.llama = new Llama();
  }

  public ingestDocument(document: Document): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.llama.ingest(document);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
```