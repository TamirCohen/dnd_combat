import React from 'react';
import { useDrop } from 'react-dnd';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface DeleteCharactersProps {
  onDrop: (character_id: number) => void;
}

const DeleteCharacters: React.FC<DeleteCharactersProps> = ({onDrop}) => {
    const [, drop] = useDrop(() => ({
      accept: 'CHARACTER',
      drop: (item: any) => onDrop(item.id),
    }));
  
    return (
      <IconButton
      ref={drop}
      size="large"
      color="inherit"
      aria-label="menu"
    >
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Drag
      </Typography>
      <DeleteIcon />
    </IconButton>
    );
  };
  
  export default DeleteCharacters;