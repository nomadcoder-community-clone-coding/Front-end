import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainBoard from './component/MainBoard';
import Footer from './component/Footer';

function App() {

  return (
    <div>
      <MainBoard />
      <Footer />
    </div>
  );
}

export default App;