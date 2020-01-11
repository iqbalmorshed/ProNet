import React from 'react';
//import './App.css';
import BaseLayout from './BaseLayout'
import {AuthProvider} from './context/authStore'
import {ComponentStateProvider} from './context/componentStateStore'

function App() {
  return (
    <AuthProvider>
      <ComponentStateProvider>
        <BaseLayout />
      </ComponentStateProvider>
     
    </AuthProvider>
    
  );
}

export default App;
