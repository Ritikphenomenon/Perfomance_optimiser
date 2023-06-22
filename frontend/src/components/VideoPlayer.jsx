import { useState } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
import '../css/Videoplayer.css'

import 'bootstrap/dist/css/bootstrap.css';

export const VideoPlayer = () => {
    //for onChange event
    const [youtubeVideo, setyoutubeVideo] = useState("");
    //for submit event
  
    const [youtubeURL, setyoutubeURL] = useState(
      "https://www.youtube.com/watch?v=L93hyPiltLA"
    );
    //for error message
    const [youtubeError, setYoutubeError] = useState("");
  
    const handleYoutubechange = (e) => {
      setyoutubeVideo(e.target.value);
    };
  
    const handleYoutubesubmit = (e) => {
      e.preventDefault();
      const youtubeRegex =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
      if (youtubeRegex.test(youtubeVideo)) {
        setyoutubeURL(youtubeVideo);
        setYoutubeError("");
      } else {
        setYoutubeError("invalid url please try again");
      }
    };
  
    return (
      <>
        <Draggable>
          <div className="wrapper">
            <form className="form-group form" style={{}} onSubmit={handleYoutubesubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter youtube url"
                required
                onChange={handleYoutubechange}
              />
              <button type="submit" className="btn btn-success " style={{width:"100%",height:"auto", backgroundColor:"green", padding:"6px"}}>
                UPLOAD
              </button>
            </form>
            {youtubeError && <div className="error-msg">{youtubeError}</div>}
            <br></br>
            <div className="youtube-Box">
              <ReactPlayer url={youtubeURL} className="video" controls />
            </div>
          </div>
        </Draggable>
      </>
    );
  };
  