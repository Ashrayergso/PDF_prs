import fs from 'fs';
import { PDFDocument } from 'pdf-lib';
import { Document } from '../types/index';

export async function ingestDocument(filePath: string): Promise<Document> {
  const fileBuffer = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(fileBuffer);
  const pageCount = pdfDoc.getPageCount();

  let documentText = '';
  for (let i = 0; i < pageCount; i++) {
    const page = pdfDoc.getPage(i);
    documentText += page.getTextContent();
  }

  return {
    filePath,
    text: documentText,
  };
}