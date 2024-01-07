// App.tsx
import React from 'react';
import BattleGrid from 'components/BattleGrid';
import Background from 'components/Background';
import ButtonAppBar from 'components/ButtonAppBar'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CharacterState } from 'components/Character';

import { useState } from 'react';

const App: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("/dnd_combat/images/backgrounds/desert.jpg");
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Luk', image: '/dnd_combat/images/characters/Luk_worm.jpg', location: { row: 0, col: 0 } },
    { id: 2, name: 'Madav', image: '/dnd_combat/images/characters/Madav_holden.jpg', location: { row: 0, col: 1 } },
    { id: 3, name: 'Troya', image: '/dnd_combat/images/characters/Troya_bolton.jpg', location: { row: 0, col: 2 } },
    { id: 4, name: 'Veronika', image: '/dnd_combat/images/characters/Veronika.jpg', location: { row: 0, col: 3 } },
    { id: 5, name: 'Zak', image: '/dnd_combat/images/characters/Zak_Banan.jpg', location: { row: 0, col: 4 } },
    // Add more characters as needed
  ]);
  const handleDrop = (characterId: number, targetLocation: { row: number; col: number }) => {
    // Update the state to reflect the new location of the character
    console.log('Drop characterId', characterId);
    console.log('New location', targetLocation);
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === characterId ? { ...character, location: targetLocation } : character
      )
    );
  };

  const set_background_image = (image: string) => {
    setBackgroundImage(image);
  }
  const deleteCharacter = (character_id: number) => {
    // Delete the character from the state by id
    console.log('Delete character', character_id);
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character.id !== character_id)
    );
  }
  const handleImageUpload = (newImage: File) => {
    // Update the state with the new image
    console.log('Currently not working lol');

    const reader = new FileReader();

    reader.onload = (event) => {
      // Get the data URL from the FileReader result
      const dataUrl = event.target?.result as string;

      const newCharacter: CharacterState = {
        id: characters.length + 1,
        name: `New Character ${characters.length + 1}`,
        image: dataUrl,
        location: { row: 0, col: 0 },
      };
      setCharacters([...characters, newCharacter]);

      console.log('Added new image');

    };

    // Read the content of the file as a data URL
    reader.readAsDataURL(newImage);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <ButtonAppBar selectBackgroundImage={set_background_image} deleteCharacter={deleteCharacter} />
        <Background image={backgroundImage}>
          <BattleGrid characters={characters} handleDrop={handleDrop} handleImageUpload={handleImageUpload}/>
        </Background>
      </DndProvider>
    </div>

  );
};

export default App;
