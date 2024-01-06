// App.tsx
import React from 'react';
import BattleGrid from 'components/BattleGrid';
import Background from 'components/Background';
import ButtonAppBar from 'components/ButtonAppBar'
import { useState } from 'react';

const App: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("/dnd_combat/images/backgrounds/desert.jpg");

  const set_background_image = (image: string) => {
    setBackgroundImage(image);
  }
  return (
    <div>
      <ButtonAppBar selectBackgroundImage={set_background_image}/>
      <Background image={backgroundImage}>
        <BattleGrid />
      </Background>
    </div>

  );
};

export default App;
