// ImageDropdown.tsx
import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import { SelectChangeEvent } from "@mui/material";
import Typography from '@mui/material/Typography';


interface ImageDropdownProps {
    onSelect: (selectedImage: string) => void;
    images: string[];
}

const ImageDropdown: React.FC<ImageDropdownProps> = ({onSelect, images}) => {
        
    const handleImageChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as string;
        onSelect(selectedValue);
    };

    return (
        <FormControl>
            <Select
                labelId="image-dropdown-label"
                id="image-dropdown"
                label="Select Image"
                onChange={handleImageChange}
            >
                {images.map((image, index) => (
                    <MenuItem key={index} value={image}>
                        <img src={image} alt={`Option ${index}`} style={{ width: '30px', marginRight: '5px' }} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ImageDropdown;
