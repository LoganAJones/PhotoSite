import React from 'react';
import { browserHistory, Link } from 'react-router';

const PostShow = (props) => {
  let image_url = null
  let display = null
  let filearray = []
  if (props.post.post_art) {
    image_url = props.post.post_art.url
    filearray = props.post.post_art.url.split(".")
    if (filearray[filearray.length-1] == "MP4" || filearray[filearray.length-1] == "mov"){
      display = <video width="470" height="252" src={image_url} controls autoPlay/>


    } else {
      display = <img src={image_url} />
    }
  }

  return(

    <div className="  ">
    <div className="small-12 large-10 large-centered columns tilebreak">

      <Link to={`/photos`} >
      {display}

      <div className="description">
      <p className="p">{props.post.description}</p>
      </div>

      </Link>
      </div>
      </div>

  )
}

export default PostShow;
