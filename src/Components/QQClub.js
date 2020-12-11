import React from 'react';
import HollywoodQuiz from '../images/HollywoodQuiz.jpg'
import GKQuiz from '../images/GKQuiz.png';
import CricketQuiz from '../images/CricketQuiz.jpg';

import Card from './CardDes';

class QQ extends React.Component{
	render(){
		return(
			<div className= "clubpage">
			<h1 className="heading">The University Quiz Club</h1><br/>
			<p class="content" style={{WebkitTextFillColor:"white"}}>Quizzing is a quest for wisdom and proficiency. A quiz enthusiast is a curious wanderer who creates a seam where knowledge meets vehemence. The Heartian Quiz Club- Nosy Parkers, is a coterie of students with a fresh and unparalleled outlook. The club members have bagged many accolades at various quiz competitions up and down the state along with a few sparkling victories beyond state boundaries. The regular routine of the club is a meeting on all Fridays at leisure time to confabulate on current affairs, interesting facts and GK. To cheer up the monotonous campus life, the club organizes several topic specific open quizzes at regular intervals.</p><br/>
			<p s class="content" style={{WebkitTextFillColor:"white",border:"none"}}>The Upcoming quizzes are:</p>
			<Card image={HollywoodQuiz} title={'Hollywood Quiz'} number={1} linkto={'/QQClub/HollywoodQuiz'}/>
			<Card image={GKQuiz} title={'GK Quiz'} number={2} linkto={'/QQClub/GKQuiz'}/>
			<Card image={CricketQuiz} title={'Cricket Quiz'} number={3} linkto={'/QQClub/CricketQuiz'}/>
			</div>

		)
	}
}

export default QQ;
