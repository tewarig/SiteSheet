import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'




import './random.css';
import WinnerImage from '../../../assets/winner.png' ;



import {
    BrowserRouter as Router,
        useParams
  } from "react-router-dom";


export  default function Random(){
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
        const name= randomWinner['title']["$t"]; 
        const email = randomWinner['content']["$t"];
        var len = email.length;
        const mainMail = email.slice(7,len);

      return (
     <>
     <Confetti
      width={width}
      height={height}
    />
              <img src={WinnerImage} className="main-image" alt="WinnerImage"></img>

    <div className="centered-this">
        <h3 className="talor">The winner is 🏆 </h3> <br/>
     <h1 className="talor text">{name}</h1> <br/>
      <span className="talor">{mainMail}</span>
    </div>
     </>
      

    );
    }
};
