```tsx
import React from 'react';
import './styles/App.css';
import DocumentSelection from './components/DocumentSelection';
import TextBox from './components/TextBox';
import ActionButton from './components/ActionButton';
import HighlightButton from './components/HighlightButton';
import EntityButton from './components/EntityButton';
import Chat from './components/Chat';

function App() {
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
      <Chat />
    </div>
  );
}

export default App;
```