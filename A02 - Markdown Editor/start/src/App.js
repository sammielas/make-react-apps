import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markDown, setMarkDown] = useState('# Rendered HTML Here');
  function markedDown(e) {
    setMarkDown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={markedDown} value={markDown} />

      {/*  <div className="preview">{markDown}</div> */}

      <ReactMarkdown className="preview" source={markDown} />
    </div>
  );
}
