// src/components/LiveViewersCounter.js
import { useEffect, useState } from 'react';

const LiveViewersCounter = () => {
  const [liveViewers, setLiveViewers] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3002');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLiveViewers(data.liveViewers);
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <p>Live Viewers: {liveViewers}</p>
    </div>
  );
};

export default LiveViewersCounter;
