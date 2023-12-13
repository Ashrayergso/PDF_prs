import React from 'react';
import DocumentSelection from './components/DocumentSelection';
import TextBox from './components/TextBox';
import ActionButton from './components/ActionButton';
import HighlightButton from './components/HighlightButton';
import EntityButton from './components/EntityButton';
import ChatBox from './components/ChatBox';
import MethodSelection from './components/MethodSelection';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Q&A App</h1>
      </header>
      <DocumentSelection />
      <TextBox />
      <div className="button-group">
        <ActionButton />
        <HighlightButton />
        <EntityButton />
      </div>
      <ChatBox />
      <MethodSelection />
    </div>
  );
}

export default App;