import React from 'react';
import { useDrop } from 'react-dnd';
import CharacterState from './Character';

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
