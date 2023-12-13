import React, { useState } from 'react';
import { EntityExtraction } from '../utils/EntityExtraction';

interface EntityButtonProps {
  document: string;
}

const EntityButton: React.FC<EntityButtonProps> = ({ document }) => {
  const [entities, setEntities] = useState<string[]>([]);

  const handleEntityExtraction = async () => {
    const extractedEntities = await EntityExtraction(document);
    setEntities(extractedEntities);
  };

  return (
    <div>
      <button onClick={handleEntityExtraction}>Extract Entities</button>
      {entities.length > 0 && (
        <div>
          <h3>Extracted Entities:</h3>
          <ul>
            {entities.map((entity, index) => (
              <li key={index}>{entity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EntityButton;