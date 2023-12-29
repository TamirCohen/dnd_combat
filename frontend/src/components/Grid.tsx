import React from 'react';
import { styled } from '@mui/system';


const PageContainer = styled('div')({
  backgroundImage: "url(/images/forest)", // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 50px)', // Adjust the column width as needed
  gridTemplateRows: 'repeat(10, 50px)', // Adjust the row height as needed
  gap: '1px',
  border: '2px solid #000', // Set a black border
  background: 'rgba(0, 0, 0, 0.1)', // Set a transparent background
});

const GridItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #000', // Set a black border
  background: 'rgba(0, 0, 0, 0)', // Set a completely transparent background
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the entire container
});

const GridExample = () => {
  return (
    <PageContainer>
      <GridContainer>
        {[...Array(100)].map((_, index) => (
          <GridItem key={index}>
            {index === 0 && <Image src="/images/dwarf.jpeg" alt={`Image ${index + 1}`} />}
            {index === 10 && <Image src="/images/dragon.jpeg" alt={`Image ${index + 1}`} />}
            {index === 25 && <Image src="/images/magician.jpg" alt={`Image ${index + 1}`} />}
          </GridItem>
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default GridExample;
