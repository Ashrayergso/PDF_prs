import React from 'react';
import { HighlightExtraction } from '../utils/HighlightExtraction';

interface HighlightButtonProps {
  documentText: string;
  setHighlights: React.Dispatch<React.SetStateAction<string[]>>;
}

const HighlightButton: React.FC<HighlightButtonProps> = ({ documentText, setHighlights }) => {
  const handleHighlightExtraction = () => {
    const highlights = HighlightExtraction(documentText);
    setHighlights(highlights);
  };

  return (
    <button onClick={handleHighlightExtraction}>
      Extract Highlights
    </button>
  );
};

export default HighlightButton;