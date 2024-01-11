import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ImageDropDown from './BackgroundDropdown';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteCharacters from './DeleteCharacters';
import ImageUploadForm from './ImageUploadForm';

interface ButtonAppBarProps {
  selectBackgroundImage: (selectedImage: string) => void;
  deleteCharacter: (character_id: number) => void;
  uploadBackgroundImage: (file: File) => void;
  backgroundImages: string[];
  selectedBackgroundImage: string;
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ selectBackgroundImage, deleteCharacter, uploadBackgroundImage , backgroundImages, selectedBackgroundImage}) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dnd Battles
          </Typography>
          <DeleteCharacters onDrop={deleteCharacter} />
          <IconButton>
            <ImageUploadForm onImageUpload={uploadBackgroundImage}>
            <Typography  style={{ color: 'white' }}>
              Upload Background
            </Typography>
            </ImageUploadForm>
          </IconButton>

          <ImageDropDown onSelect={selectBackgroundImage} images={backgroundImages} selected_image={selectedBackgroundImage}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;