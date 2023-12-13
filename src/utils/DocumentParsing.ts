import { PDFDocument } from 'pdf-lib';
import { ParsedDocument } from '../types/index';

export async function parseDocument(file: Buffer): Promise<ParsedDocument> {
  const pdfDoc = await PDFDocument.load(file);
  const pageCount = pdfDoc.getPageCount();
  let parsedText = '';

  for (let i = 0; i < pageCount; i++) {
    const page = pdfDoc.getPage(i);
    const textContent = await page.getTextContent();
    parsedText += textContent.items.map(item => item.str).join(' ');
  }

  return {
    text: parsedText,
    pageCount: pageCount,
  };
}