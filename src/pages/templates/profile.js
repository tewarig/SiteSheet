import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../comp/loading/loading';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export  default function Profile(){
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
  <Loading/>

    </>

          
        );
    }else{
    return (
      <div>
        <h3>ID: </h3>
      </div>
    );
    }
};
