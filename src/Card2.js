import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card2() {
  return ( 
    <Card sx={{ minWidth: 275 }}>
        <CardMedia
         component="video"
         autoPlay 
         controls
         src="./video2.mp4"
        />
    </Card>
  );
}

