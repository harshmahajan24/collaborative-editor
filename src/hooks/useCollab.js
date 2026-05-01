import { useEffect, useState, useMemo } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export function useCollab(roomName) {
  // Create the Yjs Doc and Text type once
  const { ydoc, ytext } = useMemo(() => {
    const doc = new Y.Doc();
    const text = doc.getText('codemirror');
    return { ydoc: doc, ytext: text };
  }, []);

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // This connects to a local server we will start in the next step
    const wsProvider = new WebsocketProvider(
      'ws://localhost:1234', 
      roomName,
      ydoc
    );

    setProvider(wsProvider);

    // Clean up connection when user closes the tab
    return () => wsProvider.destroy();
  }, [roomName, ydoc]);

  return { ytext, provider };
}