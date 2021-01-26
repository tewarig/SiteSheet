import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Loading from '../../../comp/loading/loading';
import {Button , Card} from "@material-ui/core";
import ReactPlayer from 'react-player'



import './youtube.css';
import YoutubeImage from '../../../assets/youtube.png' ;



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
  <Loading color={'#0000'}/>

    </>

          
        );
    }else{
        var len = data.length;
        var mainData = data.slice(1,len);
    return (
      < >
            <div className="main-grid">

      <div className="main-div">
        
      <h1 className="main-text">
        {data[0].title["$t"]}
      </h1>
      <h3 className="main-subText">
        {  clearText(data[0].content["$t"])}
      </h3>
      <div className="image">
          <img src={YoutubeImage} className="main-image" alt="Youtube"></img>
      </div>
      </div>
     <div className="video-Grid">
{
    mainData.map(
        x =>
        <>
        <div className="card">
    <ReactPlayer url={clearLink(x["content"].$t)} controls={true} className="videoPlayer" width="100%"/>
    <h3 className="videoTitle"> {x["title"].$t}</h3>

  
     </div>
    </>
        
    )
}
        </div>
        </div>
     </>
      

    );
    }
};
