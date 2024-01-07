import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';


interface ImageUploadFormProps {
    onImageUpload: (file: File) => void;
    cssProps?: React.CSSProperties;
    children?: React.ReactNode;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onImageUpload, cssProps, children}) => {
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
    
    return (
        <div {...getRootProps()} style={cssProps}>
            <input {...getInputProps()} />
            {children}
        </div>
    );
};

export default ImageUploadForm;
