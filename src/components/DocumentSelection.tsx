import React, { useState } from 'react';
import { ingestDocument } from '../utils/DocumentIngestion';

interface DocumentSelectionProps {
  onDocumentSelected: (document: Document) => void;
}

const DocumentSelection: React.FC<DocumentSelectionProps> = ({ onDocumentSelected }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const document = await ingestDocument(selectedFile);
      onDocumentSelected(document);
    }
  };

  return (
    <div id="document-selection">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default DocumentSelection;