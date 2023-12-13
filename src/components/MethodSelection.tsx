import React, { useState } from 'react';

type MethodSelectionProps = {
  onMethodSelect: (method: string) => void;
};

const MethodSelection: React.FC<MethodSelectionProps> = ({ onMethodSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState('BM25');

  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(event.target.value);
    onMethodSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="method-selection">Select NLP Method:</label>
      <select id="method-selection" value={selectedMethod} onChange={handleMethodChange}>
        <option value="BM25">BM25</option>
        <option value="rerank">Rerank</option>
        <option value="llm">LLM Query</option>
      </select>
    </div>
  );
};

export default MethodSelection;