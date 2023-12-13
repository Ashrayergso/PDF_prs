import React from 'react';
import { ActionItemExtraction } from '../utils/ActionItemExtraction';

interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  const handleActionExtraction = () => {
    const actionItems = ActionItemExtraction(text);
    console.log(actionItems); // Replace this with your own logic
  };

  return (
    <button onClick={handleActionExtraction}>
      Extract Action Items
    </button>
  );
};

export default ActionButton;