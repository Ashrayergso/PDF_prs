import React, { useState } from 'react';
import { HighlightExtraction } from '../utils/HighlightExtraction';

interface HighlightButtonProps {
  text: string;
  onHighlightExtracted: (highlights: string[]) => void;
}

export const HighlightButton: React.FC<HighlightButtonProps> = ({ text, onHighlightExtracted }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleHighlightExtraction = async () => {
    setIsLoading(true);
    const highlights = await HighlightExtraction(text);
    onHighlightExtracted(highlights);
    setIsLoading(false);
  };

  return (
    <button id="highlight-button" onClick={handleHighlightExtraction} disabled={isLoading}>
      {isLoading ? 'Extracting...' : 'Extract Highlights'}
    </button>
  );
};