import React, { useState } from 'react';
import ImageDropdown from './BackgroundsDropdown';
import { Image } from './BackgroundsDropdown';

interface BackgroundProps {
    children: React.ReactNode;
    image: string;
}

const Background: React.FC<BackgroundProps> = ({ children, image }) => {

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    width: '100%',
                    height: '100vh', // Set height to 100vh to cover the entire screen
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${image})`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Background;
