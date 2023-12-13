import { Text } from '../types';

export function extractAction(text: Text): string[] {
    // This is a placeholder function. In a real-world application, you would use NLP techniques to extract action items from the text.
    const actionItems = text.content.match(/(?<=ACTION: ).*?(?=\.)/g) || [];
    return actionItems;
}