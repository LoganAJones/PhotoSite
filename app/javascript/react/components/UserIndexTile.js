import React from 'react';
import { Link } from 'react-router';


const UserIndexTile = (props) => {

  let first_name= props.first_name
  let last_name= props.last_name
  let user_name= props.user_name

  let profile_photo= props.profile_photo
  return(


    <div className="small-12 large-12 columns ">
    <div className="  userindex-tile  ">


    <Link to={`/users/${props.id}`} >
      <p className="username"> {user_name}</p>

      <div className="photo">
      <img src={props.profile_photo}/>
      </div>
      </Link>
      </div>
      </div>

  )
}

export default UserIndexTile;

// if(props.posts != undefined){
//   mappedPosts = posts.map(post => {
//     return(
//       <PostTile
//       key={post.id}
//       id={post.id}
//       post_art = {post.post_art.url}
//       description = {""}
//       />
//     )
//   })
//
// }
