import React from 'react';
import { styled } from '@mui/system';
import { useDrop } from 'react-dnd';
import CharacterState from './Character';


const PageContainer = styled('div')({
  backgroundImage: "url(/images/forest)", // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 50px)', // Adjust the column width as needed
  gridTemplateRows: 'repeat(10, 50px)', // Adjust the row height as needed
  gap: '1px',
  border: '2px solid #000', // Set a black border
  background: 'rgba(0, 0, 0, 0.1)', // Set a transparent background
});

const GridItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #000', // Set a black border
  background: 'rgba(0, 0, 0, 0)', // Set a completely transparent background
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the entire container
});


// GridCell.tsx

interface GridCellProps {
  onDrop: (targetLocation: { row: number; col: number }, character_id: number) => void;
  rowIndex: number;
  colIndex: number;
  children: React.ReactNode;
}

const GridCell: React.FC<GridCellProps> = ({ onDrop, rowIndex, colIndex, children}) => {
  const [, drop] = useDrop(() => ({
    accept: 'CHARACTER',
    drop: (item: any) => onDrop({ row: rowIndex, col: colIndex }, item.id),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: '50px',
        height: '50px',
        border: '2px solid #000',
        background: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
};

export default GridCell;
