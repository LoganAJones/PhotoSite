import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import HomeShowContainer from '../containers/HomeShowContainer'

export const App = (props) => {
  return (
    <div className="row ">
      <h1 className="home align title">L O G A N   J O N E S</h1>
      <h3 className=" align ">PHOTOGRAPGY</h3>
        <div className="  small-6 small-centered columns">
        <button className="buttonhome pad p">
          <p className="hometext p">PHOTOS</p>
        </button>
        <button className="buttonhome floatR pad p">
          <p className="hometext p">VIDEOS</p>
        </button>
      </div>
    </div>


  //   <Router history={browserHistory}>
  //   <Route path='/' component={HomeShowContainer} />
  // </Router>
);
}

export default App
