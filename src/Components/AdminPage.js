import React,{useState,useEffect} from 'react';

import axios from 'axios';

import '../Card.css';

class Data extends React.Component
{
    render(){
    return(
        <>
        <div className='card1' style={{color:"white"}}>Email:{this.props.email}<br/>
        Club:{this.props.Club}<br/>
        Event:{this.props.Event_Name}</div>
        <br/><br/><br/><br/>
        </>
    )
    }
}

function Admin(){
const [det,setdet]=useState([]);

        useEffect(()=>{
            axios.get('http://localhost:5000/event')
            .then(res=>setdet(res.data))
            .catch(err=>console.log(err));
        })
        
        return(
            <>
            <div>
                <h1 style={{color:"aqua"}}>Event Registeration Data:</h1><br/>
                {
                    det.map((data,key)=>(
                    <Data email={data.email} Club={data.Club} Event_Name={data.Event_Name}/>
                ))
                }
            </div>
            </>
        )
}
export default Admin;