import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Elleny Foundation
        </Typography>
        <Typography variant="body1">
          The Elleny Foundation is a non-profit organization dedicated to making a positive impact in the lives of those in need. Our mission is to empower individuals and communities through education, healthcare, and sustainable development initiatives.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
