import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Particles from 'react-particles-js';




import './me.css';



import {
    BrowserRouter as Router,
        useParams
  } from "react-router-dom";


export  default function Me(){
    const { width, height } = useWindowSize()

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  
    let { id } = useParams();
    const [data,setData] = useState(null);

    const fetchData = async () => {
        try{
            // console.log(id);
         const {data} = await  Axios.get('https://spreadsheets.google.com/feeds/list/'+id +'/od6/public/basic?alt=json') ;
         const details = data;
         setData(details["feed"].entry);
                          
        

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
        var len = data.length;
        var ran =   getRandomInt(0,len) ;
        var randomWinner = data[ran];   
        // const name= randomWinner['title']["$t"]; 
        // const email = randomWinner['content']["$t"];
        // var len = email.length;
       

      return (
     <>
     <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

     </>
      

    );
    }
};
