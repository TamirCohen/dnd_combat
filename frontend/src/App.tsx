// App.tsx
import React from 'react';
import GridExample from './components/GridCell';
import MainComponent from 'components/MainComponent';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <div style={{ backgroundImage: "url(/images/forest.jpg)" }}>
      <h1>DND APP</h1>
      <DndProvider backend={HTML5Backend}> <MainComponent /> </DndProvider>
    </div>
  );
};

export default App;
