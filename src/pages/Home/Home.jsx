//import videos from '../../data/video-details.json';
import * as Comp from '../../components/index.js';
import { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const AppContext = createContext();

const Home = () => {
  const { videoId } = useParams(); //grabs id from URL if any 
  const [videos, setVideos] = useState(null); //sets video list
  const [mainVideoId, setMainVideoId] = useState(''); //sets main video
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null); 
  const [error, setError] = useState('');

  //gets list of videos from API and sets value for default video
  useEffect( () => {
    const getVideos = async () => {
        try {
            const response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=bd639221-9c5b-420e-826c-d01265d31e6e")
            setVideos(response.data);
            const defaultVideoId = response.data[0].id; 
            videoId ? setMainVideoId(videoId) : setMainVideoId(defaultVideoId); //  If videoId is present in URL, it sets mainVideoId to videoId. Otherwise, it sets mainVideoId to defaultVideoId.
        } catch (err) {
            setError(err.message) 
        }
    }
    getVideos();
  }, [videoId]) //executes when videoId in URL changes

  //gets a video by ID from API
  useEffect( () => {
    if (!mainVideoId && !videoId) return; 
    const getVideo = async () => {
      try {
          const idToFetch = videoId ? videoId : mainVideoId;
          const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${idToFetch}?api_key=bd639221-9c5b-420e-826c-d01265d31e6e`)
          setVideo(response.data) 
          setComments(response.data.comments) 
      } catch (err) {
          if (err) setError(err.message) 
      }
  }
    getVideo();
  }, [mainVideoId]) //executes when mainVideoId changes

  
if (error) return <p>Error</p>
if (!videos) return <div>Loading...</div>;
if (!video) return <div>Loading...</div>;

    return (
      <>
          <AppContext.Provider value={{mainVideoId, setMainVideoId, video, comments, setComments}}>
              <Comp.VideoPlayer 
                  video = {video}
              />
              <div className='contentContainer'>
                  <Comp.ContentBlock 
                    //video = {video}
                    comments={comments}
                    setComments = {setComments}
                  />
                  <Comp.VideoList 
                    videos = {videos}
                  />
              </div>
          </AppContext.Provider>
      </>
    )
}

export default Home