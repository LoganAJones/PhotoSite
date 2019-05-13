import React, { Component } from 'react'
import UserTile from '../components/UserTile'
class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
      let fetchedUser = body
      this.setState({ users: fetchedUser})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    let image;
    if (this.state.users.profile_photo == undefined){
      image = ""
    }else{
      image = this.state.users.profile_photo.url
    }

    return(
   <div className="">
      <h1 className="text center">{this.state.users.user_name}'s Profile</h1>
      <div id="">
        <UserTile
          key={this.state.users.id}
          id={this.state.users.id}
          first_name={this.state.users.first_name}
          last_name={this.state.users.last_name}
          user_name={this.state.users.user_name}
          profile_photo={image}
          posts={this.state.users.posts}

        />
      </div>
    </div>
    )
  }
}




export default UserShowContainer;
