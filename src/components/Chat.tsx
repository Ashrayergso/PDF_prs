```tsx
import React, { useState } from 'react';
import { handleChat } from '../utils/ChatLogic';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [method, setMethod] = useState('BM25');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const chatResponse = await handleChat(message, method);
    setResponse(chatResponse);
  };

  return (
    <div id="chat-box">
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={handleInputChange} />
        </label>
        <label>
          Method:
          <select value={method} onChange={handleMethodChange}>
            <option value="BM25">BM25</option>
            <option value="rerank">rerank</option>
            <option value="llm">llm</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        Response: {response}
      </div>
    </div>
  );
};

export default Chat;
```