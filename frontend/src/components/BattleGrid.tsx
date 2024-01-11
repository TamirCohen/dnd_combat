// BattleGrid.tsx
import React, { useState } from 'react';
import Character from './Character';
import { CharacterState } from './Character';
import GridCell from './GridCell';
import ImageUploadForm from './ImageUploadForm';
import SliderSizes from './BoardSizeSlider';

interface BattleGridProps {
    characters: CharacterState[];
    handleDrop: (characterId: number, targetLocation: { row: number; col: number }) => void;
    handleImageUpload: (newImage: File) => void;
  }


const BattleGrid: React.FC<BattleGridProps> = ({characters, handleDrop, handleImageUpload}) => {
    const [sliderValue, setSliderValue] = useState<number>(10);

    const handleSliderChange = (event: Event, value: number | number[]) => {
        // Update parent component state
        setSliderValue(Array.isArray(value) ? value[0] : value);
    };
    const dropzoneStyles: React.CSSProperties = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '10px',
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '10px', // You can adjust the margin as needed
        cursor: 'pointer',
        display: 'inline-block',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Using rgba for transparent background
      };

    return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ImageUploadForm onImageUpload={handleImageUpload} cssProps={dropzoneStyles}>
                    <p>Drop New Characters</p>
                </ImageUploadForm>
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
