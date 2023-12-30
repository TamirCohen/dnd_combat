// MainComponent.tsx
import React, { useState } from 'react';
import Character from './Character';
import { CharacterState } from './Character';
import GridCell from './GridCell';
import ImageUploadForm from './ImageUploadForm';
import SliderSizes from './BoardSizeSlider';

const MainComponent: React.FC = () => {
    const [characters, setCharacters] = useState([
        { id: 1, name: 'Luk', image: '/dnd_combat/images/characters/Luk_worm.jpg', location: { row: 0, col: 0 } },
        { id: 2, name: 'Madav', image: '/dnd_combat/images/characters/Madav_holden.jpg', location: { row: 0, col: 1 } },
        { id: 3, name: 'Troya', image: '/dnd_combat/images/characters/Troya_bolton.jpg', location: { row: 0, col: 2 } },
        { id: 4, name: 'Veronika', image: '/dnd_combat/images/characters/Veronika.jpg', location: { row: 0, col: 3 } },
        { id: 5, name: 'Zak', image: '/dnd_combat/images/characters/Zak_Banan.jpg', location: { row: 0, col: 4 } },
        // Add more characters as needed
    ]);
    const [sliderValue, setSliderValue] = useState<number>(5);

    const handleImageUpload = (newImage: File) => {
        // Update the state with the new image
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

    const handleSliderChange = (event: Event, value: number | number[]) => {
        // Update parent component state
        setSliderValue(Array.isArray(value) ? value[0] : value);
    };


    return (
        
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ImageUploadForm onImageUpload={handleImageUpload} />
                <SliderSizes handleChange={handleSliderChange} />
            

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${sliderValue}, 50px)`, gap: '1px', alignItems: 'center', justifyContent: 'center' }}>
                {[...Array(sliderValue)].map((_, rowIndex) =>
                    [...Array(sliderValue)].map((__, colIndex) => (
                        <GridCell rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex}-${colIndex}`} onDrop={(targetLocation: { row: number; col: number }, character_id: number) => handleDrop(character_id, targetLocation)}>
                            {characters.map((character) => {
                                if (character.location.row === rowIndex && character.location.col === colIndex) {
                                    return (
                                        <Character key={character.id} character={character} />
                                    );
                                }
                                return null;
                            })}
                        </GridCell>
                    ))
                )}
            </div>
        </div>
    );
};

export default MainComponent;
