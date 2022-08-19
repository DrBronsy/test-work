import React from 'react';

import Container from '@mui/material/Container';

import APITestControllerForm from './components/APITestControllerForm';

import './App.scss';

function App() {
  return (
    <div className="main-container">
      <Container maxWidth="md" fixed>
        <APITestControllerForm />
      </Container>
    </div>
  );
}

export default App;
