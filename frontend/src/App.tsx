// App.tsx
import React from 'react';
import GridExample from './components/Grid';

const App: React.FC = () => {
  return (
    <div style={{ backgroundImage: "url(/images/forest.jpg)" }}>
      <h1>My dnd app</h1>
      <GridExample></GridExample>
    </div>
  );
};

export default App;
