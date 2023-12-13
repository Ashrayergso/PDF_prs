```tsx
import React, { useState } from 'react';
import { ChatProcessing } from '../utils/ChatProcessing';
import { MethodSelection } from './MethodSelection';

interface ChatBoxProps {
  documentText: string;
}

export const ChatBox: React.FC<ChatBoxProps> = ({ documentText }) => {
  const [chatInput, setChatInput] = useState('');
  const [chatOutput, setChatOutput] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('BM25');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  const handleChatSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await ChatProcessing.processChat(chatInput, documentText, selectedMethod);
    setChatOutput(response);
  };

  return (
    <div>
      <MethodSelection onMethodChange={handleMethodChange} />
      <form onSubmit={handleChatSubmit}>
        <input type="text" value={chatInput} onChange={handleInputChange} />
        <button type="submit">Ask</button>
      </form>
      <div>{chatOutput}</div>
    </div>
  );
};
```