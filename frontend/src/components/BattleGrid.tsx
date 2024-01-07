// BattleGrid.tsx
import React, { useState } from 'react';
import Character from './Character';
import { CharacterState } from './Character';
import GridCell from './GridCell';
import ImageUploadForm from './ImageUploadForm';
import SliderSizes from './BoardSizeSlider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface BattleGridProps {
    characters: CharacterState[];
    handleDrop: (characterId: number, targetLocation: { row: number; col: number }) => void;
    handleImageUpload: (newImage: File) => void;
  }


const BattleGrid: React.FC<BattleGridProps> = ({characters, handleDrop, handleImageUpload}) => {
    const [sliderValue, setSliderValue] = useState<number>(5);

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

export default BattleGrid;
