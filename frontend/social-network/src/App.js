import React from 'react';
//import './App.css';
import BaseLayout from './BaseLayout'
import {AuthProvider} from './context/authStore'

function App() {
  return (
    <AuthProvider>
      <BaseLayout />
    </AuthProvider>
    
  );
}

export default App;
