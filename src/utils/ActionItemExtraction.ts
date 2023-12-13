import { ParsedText } from '../types/index';

/**
 * Function to extract action items from the parsed text.
 * This is a placeholder and should be replaced with actual implementation.
 * @param parsedText - The parsed text from which to extract action items.
 * @returns - The extracted action items.
 */
export function extractActionItems(parsedText: ParsedText): string[] {
    // TODO: Implement actual action item extraction logic
    const actionItems: string[] = [];

    parsedText.sentences.forEach(sentence => {
        // Placeholder logic: any sentence that contains the word "action" is considered an action item
        if (sentence.includes('action')) {
            actionItems.push(sentence);
        }
    });

    return actionItems;
}