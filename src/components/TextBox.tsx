import React, { FC, useState, useEffect } from 'react';

interface TextBoxProps {
  documentText: string;
}

const TextBox: FC<TextBoxProps> = ({ documentText }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(documentText);
  }, [documentText]);

  return (
    <div className="text-box">
      <textarea readOnly value={text} />
    </div>
  );
};

export default TextBox;