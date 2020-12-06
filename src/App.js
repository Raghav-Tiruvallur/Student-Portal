import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register';
import Event from './Components/Event';
import QQ from './Components/QQClub';
import MusicClub from './Components/MusicClub';
import SportsClub from './Components/SportsClub'
import Hollywood from './Components/HollywoodQuiz';
import GK from './Components/GKQuiz';
import Cricket from './Components/CricketQuiz';
import EventRegister from './Components/EventRegister';
import AdminPage from './Components/AdminPage';
import CricketSport from './Components/Cricket';
import Basketball from './Components/Basketball';
import RockOn from './Components/RockOn';
import Karaoke from './Components/Karaoke';
import Concert from './Components/Concert';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/event'  component={Event}></Route>
      <Route exact path='/QQClub'  component={QQ}></Route>
      <Route exact path='/MusicClub'  component={MusicClub}></Route>
      <Route exact path='/SportsClub'  component={SportsClub}></Route>
      <Route exact path='/QQClub/HollywoodQuiz'  component={Hollywood}></Route>
      <Route exact path='/QQClub/GKQuiz'  component={GK}></Route>
      <Route exact path='/QQClub/CricketQuiz'  component={Cricket}></Route>
      <Route exact path='/event/EventRegister'  component={EventRegister}></Route>
      <Route exact path='/AdminPage'  component={AdminPage}></Route>
      <Route exact path='/SportsClub/Cricket'  component={CricketSport}></Route>
      <Route exact path='/SportsClub/Basketball'  component={Basketball}></Route>
      <Route exact path='/MusicClub/RockOn'  component={RockOn}></Route>  
      <Route exact path='/MusicClub/Karaoke'  component={Karaoke}></Route>   
      <Route exact path='/MusicClub/Concert'  component={Concert}></Route>     
    </Switch>
    </Router>
  );
}

export default App;
