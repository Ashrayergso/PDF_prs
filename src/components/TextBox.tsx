import React, { useState, useEffect } from 'react';

interface TextBoxProps {
  text: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <div id="text-box">
      <p>{displayText}</p>
    </div>
  );
};

export default TextBox;