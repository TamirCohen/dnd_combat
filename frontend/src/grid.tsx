// Grid.tsx
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import Character from './Character';

const ENDPOINT = 'http://localhost:3001'; // Replace with your server endpoint

const Grid: React.FC = () => {
  const [users, setUsers] = useState<{ [key: string]: { id: string; position: { x: number; y: number } } }>({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('updateUsers', (updatedUsers) => {
      setUsers(updatedUsers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {Object.values(users).map((user) => (
        <Character key={user.id} position={user.position} />
      ))}
    </div>
  );
};

export default Grid;
