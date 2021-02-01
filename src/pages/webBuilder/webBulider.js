import React , {useState}from 'react';
import './web.css';
import { Button, TextField } from "@material-ui/core";
import { makeStyles, fade } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Tooltip } from '@material-ui/core';


import {
   
  Link,
  
} from "react-router-dom";




import './web.css';
import 'react-toastify/dist/ReactToastify.css';




import WebImage from './website.svg';
import YoutubePreview  from '../../assets/web-preview/youtube.webp';





const styles =  makeStyles((theme) => ({
  palette: {
    primary: '#47ff8c',
    secondary: '#47ff8c' ,
  },
  textField: {
      width: '75%',    
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '7%',
      color: '#47ff8c',
      backgroundColor: '#f0f0f0',
      margiTop: '5%',    
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    
  },
  
}) );

function WebBulider() {
  const classes = styles();

 
  var [url ,setUrl ] = useState(null);
  var [apiUrl , setApiUrl] = useState(null);
  var [chooseTemplate ,setChooseTemplate] = useState(true);
  const getUrl = (e)  => {
    var data =  e.target.value;
    setUrl(data);
   
  }

  const checkUrl = () => {
   if(url == null)
   {
    toast.warn('please enter url');

   }else{

    var yo = url.slice(0,39);

    if(yo ==='https://docs.google.com/spreadsheets/d/')
    {
      toast('Api is ready');
      console.log(yo);
      var i = 40;
      while(url[i] !== '/')
      {
        i++;
      }
      var uniqueID = url.slice(39,i);
      console.log(uniqueID);
      var temp = 'https://sitesheet.vercel.app' + uniqueID + '/od6/public/basic?alt=json ';
      setApiUrl(temp);




     }else{
     toast.error('Please enter URL properly.');
     }
    }

  }

 const   copyCodeToClipboard = () => {
    
  navigator.clipboard.writeText(apiUrl)
    toast('Copied');

  }


  return (
  <div>
    <div className="web-intro">
       <div className="web-intro-heading"> 
       <h1 className="web-h1-yo">  SiteSheet</h1> <br/> 
        
       <span className="web-text-h2">Convert your google sheet into website</span>
        <br/>
        <ul  className="web-ul">
          <li>Make sure your data is according to the format</li>
          <li> Publish your google sheet to web </li>
          <li> Choose your favorite template</li>
          <li> Enter you google sheet url</li>
          <li> Get Link to your site in a snap.</li>         
         </ul>
        </div>   
       <img src={WebImage} className="web-img" /> 
     </div>
       <h3 className="web-intro-dis"> Choose your next website from these templates.</h3>
    {chooseTemplate && <div className="web-choose-template">
  
      <div className="web-choose-grid"> 
       <div className="web-preview-card"  >
       <Tooltip title="Visit">
         <img src={YoutubePreview} height="300"   className="img-preview-card"/>
         </Tooltip>
         <div className="card-text">
          <h2> Video share </h2>
          <h3  className="web-card-text-dis">Share your list of youtube videos in a cool format.</h3>
          <Link to="/api" >
        <Button style={{
            
            borderRadius: 25,
            backgroundColor: "#47ff8c",
            color: "#787c7a",
            textDecoration: false,
            marginRight: 5,

            
    
        }} ><h3 className="intro-button-text">Use this</h3></Button> 
        </Link>
        <Link to="/webbuilder/">
        <Button
         style={{
            
            borderRadius: 25,
            backgroundColor: "#787c7a",
            color:"#47ff8c",
            borderWidth: 5,
            borderColor: "#787c7a",
            textDecoration: false,
            marginRight: 3,

            
    
        }}
        ><h3 className="intro-button-text">See format file</h3></Button> 
        </Link>
         </div>

          </div>
         <div className="web-preview-card">
         oy </div>
         <div className="web-preview-card">
         oy </div>
      </div>

    </div>}
    {
      !chooseTemplate && <>
      yo this is url window.
      </>
    }
  </div>
  );
}

export default WebBulider;
