import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import ReactPlayer from 'react-player'
import  { Button }from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';


import './cafe.css';
import Coffe from '../../../assets/coffee.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';


import {
    BrowserRouter as Router,   
    useParams
  } from "react-router-dom";
import { PhoneInTalk } from "@material-ui/icons";


export  default function Cafe(){
   
    const clearText = (text) => {
        var temp = text.length;
       var newText = text.slice(8,temp);
       return newText;
    };
    let { id } = useParams();
    const [data,setData] = useState(null);

    const fetchData = async () => {
      try{
          // console.log(id);
       const {data} = await  Axios.get('https://spreadsheets.google.com/feeds/list/'+id +'/od6/public/basic?alt=json') ;
       const details = data;
       setData(details);
                        
       console.log(data);

      } catch(error){
           console.warn(error);
      }
      
    };
      useEffect(()=>{
        fetchData();
      }, [] );
 
    if(!data)
    {
        return(
    <>
  <Loading color={'#0000'}/>

    </>

          
        );
    }else{
     var cafeName = data["feed"].entry[0]["content"]['$t'];
     var cafeTagline = data["feed"].entry[1]["content"]['$t'];
     var cafeNumber = data["feed"].entry[2]["content"]["$t"];
     var newNumber = "tel:" + clearText(cafeNumber);
     var cafeFacebook = data["feed"].entry[3]["content"]["$t"];
     var cafeTwitter = data["feed"].entry[4]["content"]["$t"];

    return (
      < >
      <div>
        </div>
    
     <div className="social-bar">
       <div className="bar-line">
       </div>
      < a href={newNumber}>
      <Button>
       <PhoneIcon fontSize="large" />
     
      </Button>
      </a>
      <a href={clearText(cafeFacebook)}>
      <Button>
          
       <FacebookIcon fontSize="large" />
       
      </Button>
      </a>
       
      <a href={clearText(cafeTwitter)}>
      <Button>
       <TwitterIcon fontSize="large" />
     
      </Button>
      </a>
      
      </div>
        
      <div className="bottom">
          <div className="bar-line"></div>
      </div>
      <div className="cafe-wrapper">
        <div>
      <h1 className="cafe-name-text"> {clearText(cafeName)} </h1> <br/>  
       <h1 className="cafe-dis-text">{clearText(cafeTagline)} </h1>
     
       </div>
      <img className="hero-img" src={Coffe}  width="60%" height="100%"/>
      </div>
        
          <div className="bar-line"></div>
        <div className="cafe-card-Grid">

        <div className="cafe-card">
          yyo
          </div>
          <div className="cafe-card">
          yyo
          </div>
          <div className="cafe-card">
          yyo
          </div>
        </div>
   
      
         </>
    );
    }
};
