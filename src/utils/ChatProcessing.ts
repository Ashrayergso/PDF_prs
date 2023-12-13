import { BM25, Rerank, LLM } from 'nlp-methods';
import { ParsedText } from '../types/index';

type NLPMethod = 'BM25' | 'Rerank' | 'LLM';

export function processChat(query: string, method: NLPMethod, parsedText: ParsedText) {
  switch (method) {
    case 'BM25':
      return processWithBM25(query, parsedText);
    case 'Rerank':
      return processWithRerank(query, parsedText);
    case 'LLM':
      return processWithLLM(query, parsedText);
    default:
      throw new Error(`Unsupported NLP method: ${method}`);
  }
}

function processWithBM25(query: string, parsedText: ParsedText) {
  const bm25 = new BM25();
  bm25.addDocument(parsedText);
  return bm25.search(query);
}

function processWithRerank(query: string, parsedText: ParsedText) {
  const rerank = new Rerank();
  rerank.addDocument(parsedText);
  return rerank.search(query);
}

function processWithLLM(query: string, parsedText: ParsedText) {
  const llm = new LLM();
  llm.addDocument(parsedText);
  return llm.search(query);
}