import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';


interface ImageUploadFormProps {
    onImageUpload: (file: File) => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onImageUpload }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        onDrop: (acceptedFiles: FileWithPath[]) => {
            if (acceptedFiles.length > 0) {
                onImageUpload(acceptedFiles[0]);
            }
        },
    });
    
    const dropzoneStyles: React.CSSProperties = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '10px',
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '10px', // You can adjust the margin as needed
        cursor: 'pointer',
        display: 'inline-block',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Using rgba for transparent background
      };
    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Drop New Characters</p>
        </div>
    );
};

export default ImageUploadForm;
