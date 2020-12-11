import './App.css';
import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Login from './Components/Login';
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
import Football from './Components/Football';
import RockOn from './Components/RockOn';
import Karaoke from './Components/Karaoke';
import Concert from './Components/Concert';
import About from './Components/about';
import Contact from './Components/contact';
import Admission from './Components/admission';
import Academics from './Components/academics';
import Clubs from './Components/clubs'
function isLoggedIn() {
	var x=sessionStorage.getItem("status")
	if(x==="1")
		return 1;
	else
		return 0;
}
class App extends React.Component
{
	render(){
		return(
			<Switch>
			<Route exact path='/' component={Login}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/admission' component={Admission}/>
			<Route exact path='/academics' component={Academics}/>
			<Route exact path='/clubs' component={Clubs}/>
			<Route exact path='/AdminPage' component={AdminPage}/>
			<Route exact path='/event' render={() => (isLoggedIn() ? (<Event/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/QQClub' render={() => (isLoggedIn() ? (<QQ/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/MusicClub' render={() => (isLoggedIn() ? (<MusicClub/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/SportsClub' render={() => (isLoggedIn() ? (<SportsClub/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/QQClub/HollywoodQuiz' render={() => (isLoggedIn() ? (<Hollywood/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/QQClub/GKQuiz' render={() => (isLoggedIn() ? (<GK/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/QQClub/CricketQuiz' render={() => (isLoggedIn() ? (<Cricket/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/MusicClub/RockOn' render={() => (isLoggedIn() ? (<RockOn/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/MusicClub/Karaoke' render={() => (isLoggedIn() ? (<Karaoke/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/MusicClub/Concert' render={() => (isLoggedIn() ? (<Concert/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/SportsClub/Cricket' render={() => (isLoggedIn() ? (<CricketSport/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/SportsClub/Basketball' render={() => (isLoggedIn() ? (<Basketball/>) :  (<Redirect to="/"/>))}/>
			<Route exact path='/SportsClub/Football' render={() => (isLoggedIn() ? (<Football/>) :  (<Redirect to="/"/>))}/>   
			</Switch>
				)
			}
	}

	export default App;

