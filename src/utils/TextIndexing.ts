import { ParsedText } from '../types/index';

// Assuming we have a database setup with a table named 'documents'
import { db } from './DatabaseConnection';

/**
 * Function to add parsed and split text to the database
 * @param parsedText - The parsed text object containing document id and sentences
 */
export const addParsedTextToIndex = async (parsedText: ParsedText) => {
  try {
    await db('documents').insert(parsedText);
  } catch (error) {
    console.error(`Error while adding parsed text to index: ${error.message}`);
  }
};