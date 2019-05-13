import React, { Component } from 'react'
import UserIndexTile from '../components/UserIndexTile'
class UserIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/all`)
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
      let fetchedUsers = body
      this.setState({ users: fetchedUsers})

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let users = this.state.users.map(user => {
      let image;
      if (user.profile_photo == undefined){
        image = ""
      }else{
        image = user.profile_photo.url
      }
      return(

        <UserIndexTile
          key={user.id}
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          user_name={user.user_name}
          profile_photo={image}
          posts={user.posts}
  


        />
      )
    })

    return(
   <div className="">
      <h1 className="text center">All Users</h1>
      <div id="">
      {users}
      </div>
    </div>
    )
  }
}




export default UserIndexContainer;



// <UserTile
//   key={this.state.users.id}
//   id={this.state.users.id}
//   first_name={this.state.users.first_name}
//   last_name={this.state.users.last_name}
//   user_name={this.state.users.user_name}
//   posts={this.state.users.posts}
// />
