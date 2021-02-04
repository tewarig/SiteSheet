import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import  { Button }from '@material-ui/core';


import './connect.css';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import {
    BrowserRouter as Router,   
    useParams
  } from "react-router-dom";


export  default function Connect(){
   
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
     var userName = data["feed"].entry[0]["content"]['$t'];
     var userImage = data["feed"].entry[1]["content"]['$t'];
     var userEmail = data["feed"].entry[2]["content"]['$t'];
     var userTwitter = data["feed"].entry[3]["content"]["$t"];
     var userFacebook = data["feed"].entry[4]["content"]["$t"];
     var userLinkedIn = data["feed"].entry[5]["content"]["$t"];
     var userGithub = data["feed"].entry[6]["content"]["$t"];
     var userIG = data["feed"].entry[7]["content"]["$t"];
     var userYoutube = data["feed"].entry[8]["content"]["$t"];





    




    return (
      < >
      <div className="connect-bg"> 
        <img src={clearText(userImage)} className="connet-image"/>
        <h1>{clearText(userName)} </h1>
        <h2>{clearText(userEmail)}</h2>


        <div className="connect-social-icons">
        {clearText(userTwitter)  && <>  
            <a href={clearText(userTwitter)}  target="_blank" >
       <Button className="connect-button-twitter connect-btn">
           <TwitterIcon/>
          <span className="connect-button-text"> Twitter  </span>

         </Button>
         </a>
           </>}
       {clearText(userFacebook) && <> 
        <a href={clearText(userFacebook)}  target="_blank" >
       <Button className="connect-button-Facebook connect-btn">
           <FacebookIcon/>
           <span className="connect-button-text">  Facebook </span>
         </Button>
         </a>
       
       </>  }
       {clearText(userLinkedIn) && <> 
        <a href={clearText(userLinkedIn)}  target="_blank" >
       <Button className="connect-button-LinkedIn connect-btn" >
      <LinkedInIcon/>
      <span className="connect-button-text">    LinkedIn </span>
       </Button>
            </a> 
        </>}
       {clearText(userGithub) && <> 
       <a href={clearText(userGithub)}  target="_blank" >
       <Button className="connect-button-Github connect-btn">
           
           < GitHubIcon />   
           <span className="connect-button-text"> Github </span>
           
       </Button>
            </a> 
            </>}
            {clearText(userIG) && <> 
       <a href={clearText(userIG)}  target="_blank" >
       <Button className="connect-button-IG connect-btn">
           
           < InstagramIcon/>   
           <span className="connect-button-text"> Instagram </span>
           
       </Button>
            </a> 
            </>}
            {clearText(userYoutube) && <> 
       <a href={clearText(userYoutube)}  target="_blank" >
       <Button className="connect-button-youtube connect-btn">
           
           < YouTubeIcon/>   
           <span className="connect-button-text"> Youtube </span>
           
       </Button>
            </a> 
            </>}



          </div>
         </div>
      
         </>
    );
    }
};
