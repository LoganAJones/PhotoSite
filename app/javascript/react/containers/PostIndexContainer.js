import React, { Component } from 'react'
import PostTile from '../components/PostTile'
class PostIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(message);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let fetchedPosts = body
      this.setState({ posts: fetchedPosts})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let posts = this.state.posts.map(post => {
      return(

        <PostTile
          key={post.id}
          id={post.id}
          post_art={post.post_art.url}
          description={post.description}

        />
      )
    })

    return(
   <div className="">
      <h1 className="text center" >Welcome Home</h1>

      <div id="">
      {posts}
    </div>
    </div>
    )
  }
}




export default PostIndexContainer;
