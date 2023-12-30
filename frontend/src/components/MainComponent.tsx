// MainComponent.tsx
import React, { useState } from 'react';
import Character from './Character';
import GridCell from './GridCell';

const MainComponent: React.FC = () => {
    const [characters, setCharacters] = useState([
        { id: 1, name: 'Luk', image: '/images/characters/Luk_worm.jpg', location: { row: 0, col: 0 } },
        { id: 2, name: 'Madav', image: '/images/characters/Madav_holden.jpg', location: { row: 0, col: 1 } },
        { id: 3, name: 'Troya', image: '/images/characters/Troya_bolton.jpg', location: { row: 0, col: 2 } },
        { id: 4, name: 'Veronika', image: '/images/characters/Veronika.jpg', location: { row: 0, col: 3 } },
        { id: 5, name: 'Zak', image: '/images/characters/Zak_Banan.jpg', location: { row: 0, col: 4 } },
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


    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 50px)', gap: '1px', alignItems: 'center', justifyContent: 'center' }}>
                {[...Array(10)].map((_, rowIndex) =>
                    [...Array(10)].map((__, colIndex) => (
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
