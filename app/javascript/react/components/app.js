import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import HomeShowContainer from '../containers/HomeShowContainer'
import PostIndexContainer from '../containers/PostIndexContainer'
import PostFormContainer from '../containers/PostFormContainer'
import PostShowContainer from '../containers/PostShowContainer'
import UserIndexContainer from '../containers/UserIndexContainer'
import UserShowContainer from '../containers/UserShowContainer'
import ContactShowContainer from '../containers/ContactShowContainer'

export const App = (props) => {
  return (

    <Router history={browserHistory}>
      <Route path='/' component={HomeShowContainer} />
      <Route path='/contact' component={ContactShowContainer} />
      <Route path='/photos' component={PostIndexContainer} />
      <Route path='/posts/new' component={PostFormContainer} />
      <Route path='/posts/:id' component={PostShowContainer} />
      <Route path='/users/:id' component={UserShowContainer} />
      <Route path='/user/all' component={UserIndexContainer} />

    </Router>
  );
}

export default App
