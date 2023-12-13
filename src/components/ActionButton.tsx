import React, { useState } from 'react';
import { extractAction } from '../utils/ActionExtraction';

interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  const [actions, setActions] = useState<string[]>([]);

  const handleActionExtraction = async () => {
    const extractedActions = await extractAction(text);
    setActions(extractedActions);
  };

  return (
    <div id="action-button">
      <button onClick={handleActionExtraction}>Extract Actions</button>
      {actions.length > 0 && (
        <div>
          <h3>Extracted Actions:</h3>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionButton;