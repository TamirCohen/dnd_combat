// App.tsx
import React from 'react';
import MainComponent from 'components/MainComponent';
import BackgroundComponent from 'components/Background';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  return (
    <BackgroundComponent>
      <DndProvider backend={HTML5Backend}> <MainComponent /> </DndProvider>
    </BackgroundComponent>

  );
};

export default App;
