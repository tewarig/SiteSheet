import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import {Button} from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export  default function Youtube(){
     const clearLink = (link) => {
        var j = 0;
        while(link[j] !== 'h')
        {
            j++;
        }
        var temp = link.length;
         var newLink = link.slice(j,temp);
        // console.log(newLink);
        return newLink;
      
    };
    const clearText = (text) => {
        var temp = text.length;
       var newText = text.slice(6,temp);
       return newText;
    };
    let { id } = useParams();
    const [data,setData] = useState(null);
    const [sheetData,setSheetData] = useState(null);

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
  <Loading/>

    </>

          
        );
    }else{
        var len = data.length;
        var mainData = data.slice(1,len);
    return (
      <div>
      <h1>
        {data[0].title["$t"]}
      </h1>
      <h3>
        {  clearText(data[0].content["$t"])}
      </h3>

{
    mainData.map(
        x =>
        <>
    <h3> {x["title"].$t}</h3>
     
     <a href={clearLink(x["content"].$t)}><Button> {clearLink(x["content"].$t)} </Button> </a>
    </>
        
    )
}
        
      </div>
    );
    }
};
