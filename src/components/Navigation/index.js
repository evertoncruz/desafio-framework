import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Todos, Albums, Posts } from '../../pages';
import { Nav } from './styles'

const Navigation = () => {
  return (
      <Router>
        <Nav>
          <Link to='/'>Todos</Link>
          <Link to='/albums'>Albums</Link>
          <Link to='/posts'>Posts</Link>
        </Nav>
        <Switch>
          <Route path='/' exact component={Todos}/>
          <Route path='/albums' component={Albums}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </Router>
  );
}

export default Navigation;