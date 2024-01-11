// ImageDropdown.tsx
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import { SelectChangeEvent } from "@mui/material";


interface ImageDropdownProps {
    onSelect: (selectedImage: string) => void;
    images: string[];
    selected_image: string;
}

const ImageDropdown: React.FC<ImageDropdownProps> = ({onSelect, images, selected_image}) => {
        
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
                value={selected_image}
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
