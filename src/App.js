import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
function App() {
  return (
    <Router>
      <Navigation/>
      <Route exact path='/' component={NotesList}/>
      <Route exact path='/edit/:id' component={<CreateNote}/>
      <Route exact path='/create' component={CreateNote}/>
      <Route exact path='/user' component={CreateUser}/>
      hello world
    </Router>
      
  );
}

export default App;
