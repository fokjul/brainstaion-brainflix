import React, { useState, createContext } from 'react';
import './App.scss';
import * as Comp from './components/index.js';
import videos from './data/video-details.json';

export const AppContext = createContext();

function App() {
  
  //Sets the state to the first video in the list
  const [mainVideoId, setMainVideoId] = useState(videos[0].id)

  //Finds video with the same id as default video
  const video = videos.find(video => video.id === mainVideoId)

  return (
    <>
    <AppContext.Provider value={{mainVideoId, setMainVideoId}}>
      <Comp.Header />
      <Comp.VideoPlayer 
        video = {video}
      />
      <div className='contentContainer'>
        <Comp.ContentBlock 
          video = {video}
        />
        <Comp.VideoList />
      </div>
    </AppContext.Provider>
    </> 
  );
}

export default App;
