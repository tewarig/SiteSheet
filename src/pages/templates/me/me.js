import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Particles from 'react-particles-js';
import ParticleComponent from './particle' ;

import  { Button }from '@material-ui/core';




import './me.css';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';



import {
    BrowserRouter as Router,
        useParams
  } from "react-router-dom";


export  default function Me(){
    const { width, height } = useWindowSize()


    const clearText = (text) => {
        var temp = text.length;
       var newText = text.slice(5,temp);
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
        var aboutUser = data["feed"].entry[2]["content"]["$t"];
        var userDis = data["feed"].entry[3]["content"]["$t"];
        var userGithub = data["feed"].entry[4]["content"]["$t"];
        var userLinkedIn = data["feed"].entry[5]["content"]["$t"];
        var userTwitter = data["feed"].entry[6]["content"]["$t"];

   
        

      return (
     <>
      <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
          <ParticleComponent className="me-particle-box" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
            <div  className="me-container">
           <img  className="me-image" src={clearText(userImage)}/>
          <h1 className="me-name">
              {clearText(userName)}  
              </h1>
          <h2> {clearText(aboutUser)}</h2>

         <p> {clearText(userDis)}</p>
          <div> 
              <a href={clearText(userGithub)}>
                  <Button>

              <GitHubIcon/>
                  </Button>
              </a>
              <a href={clearText(userLinkedIn)}>
                  <Button>

               <LinkedInIcon className="connect-button-LinkedIn"/>
                  </Button>
              </a>
              <a href={clearText(userTwitter)}>
                  <Button>

                 <TwitterIcon className="connect-button-twitter"/>
                  </Button>

              </a>
                
                  </div>
         
          </div>
        </div>
      </div>
    </Router>

     </>
      

    );
    }
};
