import React ,{useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      console.error("Network Error", err);
    })
  },[props.url])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`)
    .then(response=>{
      if(response.data.results.lenth!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
    .catch((error) => console.error("Error fetching video:", error));
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>
              <img
              key={obj.id} 
              onClick={()=>handleMovie(obj.id)} 
              className={props.isSmall ? 'smallposter':'poster'}
              alt='poster'
              src={`${imageUrl+obj.backdrop_path}`}/>
       )}
      </div>
      {urlId && (
        <div className="youtube-container">
          <button className="close-button" onClick={() => setUrlId("")}>
            ❌ Close
          </button>
          <Youtube opts={opts} videoId={urlId.key} />
        </div>
      )}
    </div>
  )
}


export default RowPost
