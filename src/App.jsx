import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Button from './components/Button';
import Video from './components/Video';

function App() {
  const [videos, setVideos] = useState([]);
  const [source, setSource] = useState("");

  const playVideo = (videoId) => {
    videos.some((video, index) => {
      if (video._id === videoId) {
        setSource(videos[index].video);
        return true
      }
    })
  }

  useEffect(() => {
    axios.get('https://node-api-b72e.onrender.com/videos')
    .then((response) => {
      console.log(response.data)
      setVideos(response.data)
    })
  }, [])

  return (
    <>
      <div className='bg-gray-300 w-full h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div className="col-span-1">
            <Video source={source} />
          </div>
          <div className="col-span-1">
            <div className='flex flex-wrap gap-2'>
              {
                videos && videos.map((video) => {
                  return <Button key={video._id} video={video} playVideo={playVideo}/>
                })
              }
              

            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
