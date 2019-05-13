import React, { Component } from 'react'
import HomeShow from '../components/HomeShow'
import { Link } from 'react-router';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/2`)
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
      <div className="row ">
         <h1 className="home align title">L O G A N   J O N E S</h1>
         <h3 className=" align ">PHOTOGRAPGY</h3>
           <div className="  small-12 small-centered columns">
           <Link to={`/photos`}>
           <button className="buttonhome gradient-border pad p">
             <p className="hometext ">PHOTOS / VIDEOS</p>
           </button>
           </Link>

           <Link to={`/contact`}>
           <button className="buttonhome gradient-border pad p">
             <p className="hometext ">CONTACT</p>
           </button>
           </Link>
         </div>

       </div>

      // <div className="">
      //   <HomeShow
      //     key={this.state.users.id}
      //     id={this.state.users.id}
      //     first_name={this.state.users.first_name}
      //     last_name={this.state.users.last_name}
      //     user_name={this.state.users.user_name}
      //     profile_photo={image}
      //     posts={this.state.users.posts}
      //
      //   />
      // </div>
    )
  }
}




export default UserShowContainer;
