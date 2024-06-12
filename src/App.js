import React from 'react';
import './App.scss';
import BtnPrimary from './components/BtnPrimary/BtnPrimary.jsx'

function App() {
  return (
    <>
      <BtnPrimary 
        imgSrc={'./assets/icons/add_comment.svg'}
        imgAlt={'test'}
        btnName={'comment'}
      />
      <BtnPrimary 
        imgSrc={'./assets/icons/upload.svg'}
        imgAlt={'test'}
        btnName={'upload'}
      />
    </>
  );
}

export default App;
