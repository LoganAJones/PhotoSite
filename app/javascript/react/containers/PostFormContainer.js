import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { push } from 'react-router'
import { browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';


class PostFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      errors: {},
      file: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateDescriptionInput = this.validateDescriptionInput.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }



  validateDescriptionInput(input) {
      if (input.trim() === '') {
        let newError = { title: "You must enter a Description!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }
  validateFileInput(input) {
      if (input === null) {
        let newError = { title: "You must add Media!" }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.inputError
        this.setState({ errors: errorState})
        return true
      }
    }


  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    if((this.validateFileInput(this.state.file)) && (this.validateDescriptionInput(this.state.description))) {

    let body = new FormData()
    body.append("description", this.state.description)
    body.append("post_art", this.state.file[0])

    fetch(`/api/v1/posts`, {
      credentials: 'same-origin',
      method: 'POST',
      body: body,
      headers: {
        'Accept': 'application/json' },
        credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push(`/posts/${body.post.id}`)
      // /${body.album.id}
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      this.setState({ message: 'You can only upload one photo per post.'})
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className='error'>{errorItems}</div>
    }


    return(
  <div className="">
      <h1 className="text center "> New Post</h1>
      <div className="postform">

      <form onSubmit={this.handleSubmit}>
    <section className="center imgalign">
    <div className="dropzone  " name = 'post_art'>
    <Dropzone onDrop={this.onDrop}>
      <p>Drop in Some Killer Drone Shots! Large Files May take a While to Load! Be Patient!</p>
    </Dropzone>
    </div>

    </section>
    <div className="center">

      <aside>

        <h3 className="text">Selected Files:</h3>
          <ul>
          {
            this.state.file.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
          }
          </ul>
      </aside>
        <label className="">Description</label>
        <div className="field">
        <textarea
        label='Description:'
        type = 'text'
        name='description'
        value={this.state.description}
        style={{ height: 200 }}
        onChange={this.handleChange}
        />
        </div>

      <input className="button" type="submit" value="Submit" />
      </div>


      </form>
    </div>
    </div>
    )
  }
};

export default PostFormContainer;
