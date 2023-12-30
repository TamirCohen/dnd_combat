import React, { useState } from 'react';
import ImageDropdown from './BackgroundsDropdown';
import { Image } from './BackgroundsDropdown';

interface BackgroundProps {
    children: React.ReactNode;
}

const BackgroundComponent: React.FC<BackgroundProps> = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const handleSelectImage = (selectedImage: Image | null) => {
        setSelectedImage(selectedImage);
    };

    const imageList: Image[] = [
        { url: '/images/backgrounds/castle.jpg', label: 'castle' },
        { url: '/images/backgrounds/desert.jpg', label: 'desert' },
        { url: '/images/backgrounds/forest.jpg', label: 'forest' },
        { url: '/images/backgrounds/market.jpg', label: 'market' },
    ];

    return (
        <div style={{ position: 'relative' }}>
            {/* Smaller ImageDropdown in the top-left */}
            <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
                <ImageDropdown imageList={imageList} onSelectImage={handleSelectImage} />
            </div>

            <div
                style={{
                    width: '100%',
                    height: '100vh', // Set height to 100vh to cover the entire screen
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: selectedImage ? `url(${selectedImage.url})` : 'none',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default BackgroundComponent;
