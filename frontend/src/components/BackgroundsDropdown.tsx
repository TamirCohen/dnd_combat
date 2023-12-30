import React, { useState } from 'react';
import Select from 'react-select';

export interface Image {
    label: string;
    url: string;
  }
  
interface ImageDropdownProps {
    imageList: Image[];
    onSelectImage: (selectedImage: Image) => void;
}

const ImageDropdown: React.FC<ImageDropdownProps> = ({ imageList, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (selectedOption: { label: string; url: string } | null)  => {
    const image: Image = imageList.find((img) => img.url === selectedOption?.url)!;
    setSelectedImage(selectedOption?.url || null);
    onSelectImage(image);
  };


  return (
    <div>
      <Select
        id="imageDropdown"
        options={imageList}
        onChange={handleImageChange}
        value={imageList.find((img) => img.url === selectedImage)}
      />
    </div>
  );
};

export default ImageDropdown;
