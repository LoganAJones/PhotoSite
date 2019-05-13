import React from 'react';
import { Link } from 'react-router';
import PostTile from './PostTile'

const ContactShow = (props) => {

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

    <div className=" small-12  columns">
    <div className="post-tile small-4  columns">
    <h1>HI</h1>
    </div>
    <div className="small-8 columns ">

      {mappedPosts}

      </div>
      </div>

  )
}

export default ContactShow;

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
