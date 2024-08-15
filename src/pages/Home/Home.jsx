import redirectToHomePage from '../../util/redirectToHomePage';
import './Home.scss';
import * as Comp from '../../components/index.js';
import { useState, useEffect, createContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const AppContext = createContext();


const Home = () => {
  const { videoId } = useParams(); //grabs id from URL if any 
  const [videos, setVideos] = useState(null); //sets video list
  const [mainVideoId, setMainVideoId] = useState(''); //sets main video
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null); 
  const [error, setError] = useState('');
  const [displayMainSection, setDisplayMainSection] = useState(true)
  const [redirectCompleted, setRedirectCompleted] = useState(false) 

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
          if (err) setError(err.message) 
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
        if(err) setError(err.message)
      }
    }
  }

  useEffect(()=> {
    setDisplayMainSection(true)
  }, [timeLeft === 0])

if (error) return <p>Error</p>
if (!videos) return <div>Loading...</div>;
if (!video) return <div>Loading...</div>;

    return (
      <>
        <div className='success-message-container'>
          <Comp.SuccessMessage 
            displaySettings={displayMainSection}
            action='deleted'
            timeLeft={timeLeft}
          />
        </div>
        
        <section className={`main-section ${displayMainSection ? 'display' : 'displayNone'}`}>
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