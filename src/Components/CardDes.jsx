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
  
class Button extends React.Component {
render() {
    var margin={
        marginLeft:"80px",
        width:"75px",
        textAlign:"center"
    }
    return (
      <button className="btn btn-primary btn-sm m-10" style={margin}>View</button>
    )
}
}

class CardBody extends React.Component {
render() {
    return (
    <div className="card-body">
        <h2>{this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <Link to={this.props.linkto}><Button /></Link>
    </div>
    )
}
}

class Card extends React.Component {
    render() {
        return (
        <article className="card">
            <CardHeader image={this.props.image}/>
            <CardBody title={this.props.title} text={this.props.text} linkto={this.props.linkto}/>
        </article>
        )
    }
}
export default Card;