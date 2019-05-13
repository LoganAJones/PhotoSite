import React from 'react';
import { Link } from 'react-router';

const PostTile = (props) => {
  let description = props.description
  let post_art = null
  let display = null
  let filearray = []
  if (props.post_art) {
    post_art = props.post_art
    filearray = props.post_art.split(".")
    if (filearray[filearray.length-1] == "mp4" || filearray[filearray.length-1] == "mov"){
      display = <video width="470" height="252" src={post_art} controls autoPlay/>
    } else {
      display = <img src={post_art} />
    }
  }
  return(
    <div className=" large-centered  ">
    <div className="small-12 large-4 columns ">
    <div className="tilebreak">

      <Link to={`/posts/${props.id}`} >
      {display}

      <div className="description">
      <p className="p">{description}</p>
      </div>

      </Link>
      </div>
      </div>
      </div>

  )
}

export default PostTile;
