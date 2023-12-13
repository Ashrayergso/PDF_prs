import React, { useState } from 'react';
import { extractEntity } from '../utils/EntityExtraction';

const EntityButton: React.FC = () => {
  const [entities, setEntities] = useState<string[]>([]);

  const handleEntityExtraction = async () => {
    const extractedEntities = await extractEntity();
    setEntities(extractedEntities);
  };

  return (
    <div id="entity-button">
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