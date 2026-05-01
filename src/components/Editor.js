import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { yCollab } from 'y-codemirror.next';
import { useCollab } from '../hooks/useCollab';

function Editor() {
  // Use our new hook! 'main-room' is the ID of the shared doc
  const { ytext, provider } = useCollab('main-room');

  const extensions = [
    javascript({ jsx: true }),
    // Only enable collaboration if the provider is ready
    ...(ytext ? [yCollab(ytext, provider?.awareness)] : [])
  ];

  return (
    <div className="editor-container">
      <CodeMirror
        height="100%"
        theme={oneDark}
        extensions={extensions}
      />
    </div>
  );
}

export default Editor;