import React from 'react';
import '../Card.css';

import {Link} from 'react-router-dom';

class CardHeader extends React.Component {
	render() {
		const { image } = this.props;
		var style = { 
			backgroundImage: 'url(' + image + ')',
		};
		return (
			<header style={style} id={image} className="card-header">
			</header>
		)
	}
}
class CardBody extends React.Component {
	render() {
		return (
			<div className="card-body">
			<p className="body-content">{this.props.title}</p>
			</div>
		)
	}
}

class Card1 extends React.Component
{

	func=(e)=>
	{
		var divdest=document.getElementsByClassName("cardWrapper1")[0].firstChild
		var dest=document.getElementsByClassName("cardWrapper1")[0].firstChild.firstChild.lastChild
		if(e.type==="mouseover"){
			dest.style.color="#4caf50"
			divdest.style.boxShadow="2px 2px 2px 2px #fff"}
		else if(e.type==="mouseleave"){
			dest.style.color="white"
			divdest.style.boxShadow="0px 0px 0px 0px"}
	}
	render()
	{
		return(
			<div className="cardWrapper1" >	
			<article className="card"onMouseOver={this.func} onMouseLeave={this.func}>
			<Link to={this.props.prop.linkto}>
			<CardHeader image={this.props.prop.image} link={this.props.prop.linkto}/>
			<CardBody title={this.props.prop.title}/>
			</Link>
			</article>
			</div>
		)
	}
}

class Card2 extends React.Component
{
	func=(e)=>
	{
		var divdest=document.getElementsByClassName("cardWrapper2")[0].firstChild
		var dest=document.getElementsByClassName("cardWrapper2")[0].firstChild.firstChild.lastChild
		if(e.type==="mouseover"){
			dest.style.color="#4caf50"
			divdest.style.boxShadow="2px 2px 2px 2px #fff"}
		else if(e.type==="mouseleave"){
			dest.style.color="white"
			divdest.style.boxShadow="0px 0px 0px 0px"}
	}
	render()
	{
		return(
			<div className="cardWrapper2" >
			<article className="card" onMouseOver={this.func} onMouseLeave={this.func}>
			<Link to={this.props.prop.linkto}>	
			<CardHeader image={this.props.prop.image} link={this.props.prop.linkto}/>
			<CardBody title={this.props.prop.title}/>
			</Link>
			</article>
			</div>
		)
	}
}

class Card3 extends React.Component
{
	func=(e)=>
	{
		var divdest=document.getElementsByClassName("cardWrapper3")[0].firstChild
		var dest=document.getElementsByClassName("cardWrapper3")[0].firstChild.firstChild.lastChild
		if(e.type==="mouseover"){
			dest.style.color="#4caf50"
			divdest.style.boxShadow="2px 2px 2px 2px #fff"}
		else if(e.type==="mouseleave"){
			dest.style.color="white"
			divdest.style.boxShadow="0px 0px 0px 0px"}
	}
	render()
	{
		return(
			<div className="cardWrapper3">
			<article className="card" onMouseOver={this.func} onMouseLeave={this.func}>
			<Link to={this.props.prop.linkto}>	
			<CardHeader image={this.props.prop.image} link={this.props.prop.linkto}/>
			<CardBody title={this.props.prop.title}/>
			</Link>
			</article>
			</div>
		)
	}
}

class Card extends React.Component {

	render() {
		if (this.props.number==1)
			return (
				<Card1 prop={this.props}/>)
		else if (this.props.number==2)
			return (
				<Card2 prop={this.props}/>)
		else if (this.props.number==3)
			return (
				<Card3 prop={this.props}/>)
	}

}
export default Card;




