import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Particles from 'react-particles-js';
import ParticleComponent from './particle' ;



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
        <ParticleComponent />
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
          <h1 className="me-name">User Name</h1>
          </div>
        </div>
      </div>
    </Router>

     </>
      

    );
    }
};
