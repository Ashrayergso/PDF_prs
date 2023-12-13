```typescript
export interface Document {
  id: string;
  content: string;
}

export interface Sentence {
  id: string;
  content: string;
  documentId: string;
}

export interface ActionItem {
  id: string;
  content: string;
  sentenceId: string;
}

export interface Highlight {
  id: string;
  content: string;
  sentenceId: string;
}

export interface Entity {
  id: string;
  content: string;
  sentenceId: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
}

export enum NlpMethod {
  BM25 = 'BM25',
  Rerank = 'Rerank',
  LlmQuery = 'LlmQuery',
}
```