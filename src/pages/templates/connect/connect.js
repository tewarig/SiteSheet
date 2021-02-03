import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import  { Button }from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';


import './connect.css';
import Coffe from '../../../assets/coffee.svg';


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


    




    return (
      < >
      <div className="connect-bg"> 
        <img src={clearText(userImage)} className="connet-image"/>
        <h1>{clearText(userName)} </h1>
        <h2>{clearText(userEmail)}</h2>
         </div>
      
         </>
    );
    }
};
