import React, { Component } from 'react';
import PostShow from '../components/PostShow'

class PostShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount() {

    let postId = this.props.params.id
    fetch(`/api/v1/posts/${postId}`)
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

      let fetchedPost = body
      this.setState({ post: fetchedPost})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(

      <div className=" " >
        <h1 className=" title-font"></h1>

        <PostShow

          post = {this.state.post}
        />
      </div>

    )
  }
}

export default PostShowContainer;
