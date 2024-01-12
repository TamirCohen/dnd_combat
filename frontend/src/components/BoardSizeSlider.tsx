import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface SliderSizesProps {
    handleChange: (event: Event, value: number | number[]) => void;
    initial_value: number;
}

const SliderSizes: React.FC<SliderSizesProps> = ({ handleChange, initial_value}) => {
    return (
        <Box sx={{ width: 300 }}>
            <Slider defaultValue={initial_value} aria-label="Default" valueLabelDisplay="auto" onChange={handleChange} min={1} max={50} />
        </Box>
    );
}

export default SliderSizes;
