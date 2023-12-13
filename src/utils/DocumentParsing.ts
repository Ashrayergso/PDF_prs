```typescript
import { PDFDocument } from 'pdfjs-dist';

export interface ParsedDocument {
  text: string;
}

export async function parseDocument(file: File): Promise<ParsedDocument> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pageCount = pdfDoc.getPages().length;
  let text = '';

  for (let i = 0; i < pageCount; i++) {
    const page = pdfDoc.getPages()[i];
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(' ');
  }

  return { text };
}
```