// Character.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { styled } from '@mui/system';

export interface CharacterState {
  id: number;
  name: string;
  image: string;
  location: { row: number; col: number };
}

interface CharacterProps {
  character: CharacterState;
}


const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the entire container
});

const Character: React.FC<CharacterProps> = ({ character }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CHARACTER',
    item: { id: character.id, type: 'CHARACTER' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '2px solid #000',
        padding: '0px',
        backgroundColor: '#fff',
      }}
    >
      <Image src={character.image} alt={`Image ${character.name}`} />
    </div>
  );
};

export default Character;
