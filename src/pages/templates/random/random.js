import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'




import './random.css';



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

     const clearLink = (link) => {
        var j = 0;
        while(link[j] !== 'h')
        {
            j++;
        }
        var temp = link.length;
         var newLink = link.slice(j,temp);
        return newLink;
      
    };
    const clearText = (text) => {
        var temp = text.length;
       var newText = text.slice(6,temp);
       return newText;
    };
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
        var ran =   getRandomInt(0,len+1) ;
        var randomWinner = data[ran];   
        const name= randomWinner['title']["$t"]; 
        const email = randomWinner['content']["$t"];

      return (
     <>
     <Confetti
      width={width}
      height={height}
    />
     <h1>{name}</h1>
      <h3>{email}</h3>
     </>
      

    );
    }
};
