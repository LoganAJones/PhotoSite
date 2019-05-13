import React from 'react';
import { Link } from 'react-router';
import PostTile from './PostTile'

const UserTile = (props) => {

  let first_name= props.first_name
  let last_name= props.last_name
  let user_name= props.user_name
  let profile_photo= props.profile_photo
  let posts= props.posts
  let mappedPosts;

  if(props.posts != undefined){
    mappedPosts = posts.map(post => {
      return(
        <PostTile
          key={post.id}
          id={post.id}
          post_art = {post.post_art.url}
          description = {""}
        />
      )
    })

  }
  return(
<div>
    <div className="user-tile user-tile-wrap ">
      <p>{first_name} {last_name}</p>
      <img src={props.profile_photo}/>
      </div>
      <div className=" ">
      {mappedPosts}
      </div>
      </div>


  )
}

export default UserTile;

// let mappedPosts = props.posts.map(post => {
//   debugger
//   return(
//
//     <PostTile
//     key={post.id}
//     id={post.id}
//     post_art={post.post_art.url}
//     description={""}
//
//     />
//   )
// })
// debugger
