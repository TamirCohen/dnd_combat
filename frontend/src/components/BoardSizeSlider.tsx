import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface SliderSizesProps {
    handleChange: (event: Event, value: number | number[]) => void;
}

const SliderSizes: React.FC<SliderSizesProps> = ({ handleChange }) => {
    return (
        <Box sx={{ width: 300 }}>
            <Slider defaultValue={5} aria-label="Default" valueLabelDisplay="auto" onChange={handleChange} min={1} max={20} />
        </Box>
    );
}

export default SliderSizes;
