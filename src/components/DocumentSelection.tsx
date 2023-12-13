import React, { useState } from 'react';
import { ingestDocument } from '../utils/DocumentIngestion';

interface DocumentSelectionProps {
  onDocumentSelect: (document: string) => void;
}

const DocumentSelection: React.FC<DocumentSelectionProps> = ({ onDocumentSelect }) => {
  const [selectedDocument, setSelectedDocument] = useState<string>('');

  const handleDocumentChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      const document = await ingestDocument(file);
      setSelectedDocument(document);
      onDocumentSelect(document);
    }
  };

  return (
    <div>
      <label htmlFor="document-upload" className="custom-file-upload">
        Upload Document
      </label>
      <input id="document-upload" type="file" accept=".pdf" onChange={handleDocumentChange} />
      {selectedDocument && <p>Selected Document: {selectedDocument}</p>}
    </div>
  );
};

export default DocumentSelection;