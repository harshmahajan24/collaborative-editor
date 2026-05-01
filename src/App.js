import React from 'react';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>CollabCode v1.0</h1>
        <div className="status-indicator">● Connected</div>
      </nav>
      <main className="main-content">
        <Editor />
      </main>
    </div>
  );
}

export default App;