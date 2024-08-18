import redirectToHomePage from '../../util/redirectToHomePage';
import './Home.scss';
import * as Comp from '../../components/index.js';
import { useState, useEffect, createContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound/NotFound.jsx';
export const AppContext = createContext();


const Home = () => {
  const { videoId } = useParams(); //grabs id from URL if any 
  const [videos, setVideos] = useState(null); //sets video list
  const [mainVideoId, setMainVideoId] = useState(''); //sets main video
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null); 
  const [error, setError] = useState('');
  const [displayMainSection, setDisplayMainSection] = useState(true) 

  //For redicrect to home page
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(null);

  //gets list of videos from API and sets value for default video
  useEffect( () => {
    const getVideos = async () => {
        try {
            const response = await axios.get("/videos")
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
          const response = await axios.get(`/videos/${idToFetch}`)
          setVideo(response.data) 
          setComments(response.data.comments) 
      } catch (err) {
          setError('Failed to fetch video');
      }
  }
    getVideo();
  }, [mainVideoId]) //executes when mainVideoId changes

  const deleteVideo = async (videoId) => {
    if(video.id === videoId) {
      try {
        await axios.delete(`/videos/${videoId}`)
        setDisplayMainSection(false)
        redirectToHomePage(setTimeLeft, navigate)
      } catch (err) {
        setError('Failed to fetch videos');
      }
    }
  }

  useEffect(() => {
    if (error) {
      setDisplayMainSection(false);
      redirectToHomePage(setTimeLeft, navigate, setDisplayMainSection)
      return;
    }
  }, [error]);

  useEffect(() => {
    if (timeLeft === 0) {
      setDisplayMainSection(true);
    }
  }, [timeLeft]);
  

if (error) return (
  <NotFound 
    displaySettings={displayMainSection}
    timeLeft={timeLeft}
  />
)
  
//Adds conditional rendering to VideoList to ensure that VideoList only renders when videos is not null or undefined
if (!videos || !video) {
  return <div>Loading...</div>;
}

return (
  <>
    {/* Success message after video is deleted */}
    <div className='success-message-container'>
      <Comp.SuccessMessage 
        displaySettings={displayMainSection}
        timeLeft={timeLeft}
       action='deleted'
      />
    </div>
    
    <section key={videoId} className={`main-section ${displayMainSection ? 'display' : 'displayNone'}`}>
      <AppContext.Provider value={{mainVideoId, setMainVideoId, video, comments, setComments}}>
        <Comp.VideoPlayer 
            video = {video}
        />
        <div className='contentContainer'>
            <Comp.ContentBlock 
              comments={comments}
              setComments = {setComments}
              setDisplayMainSection = {setDisplayMainSection}
              deleteVideo = {deleteVideo}
            />
            <Comp.VideoList 
              videos = {videos}
            />
        </div>
      </AppContext.Provider>
    </section>
  </>
)
}

export default Home