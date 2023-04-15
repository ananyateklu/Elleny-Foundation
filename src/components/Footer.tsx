import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          &copy; {currentYear} Your Foundation Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
