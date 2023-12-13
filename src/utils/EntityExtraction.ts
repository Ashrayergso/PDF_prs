```typescript
import { Entity } from '../types';

// Assuming an external NLP library for entity extraction
import * as nlp from 'nlp-library';

export const extractEntity = (text: string): Entity[] => {
  const entities = nlp.extractEntities(text);
  return entities.map(entity => ({
    start: entity.start,
    end: entity.end,
    value: entity.value,
    entity: entity.entity
  }));
};
```