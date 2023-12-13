```typescript
import { BM25, Rerank, LLM } from 'nlp-methods';

export interface ChatMessage {
  user: string;
  message: string;
  timestamp: Date;
}

export interface NLPMethod {
  name: string;
  method: any;
}

export const NLP_METHODS: NLPMethod[] = [
  { name: 'BM25', method: BM25 },
  { name: 'Rerank', method: Rerank },
  { name: 'LLM', method: LLM },
];

export function handleChat(message: string, method: string): ChatMessage {
  const selectedMethod = NLP_METHODS.find((nlpMethod) => nlpMethod.name === method);
  if (!selectedMethod) {
    throw new Error(`Invalid NLP method: ${method}`);
  }

  const response = selectedMethod.method.process(message);
  return {
    user: 'AI',
    message: response,
    timestamp: new Date(),
  };
}
```