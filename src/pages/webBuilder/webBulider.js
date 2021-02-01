import React , {useState}from 'react';
import './web.css';
import { Button, TextField } from "@material-ui/core";
import { makeStyles, fade } from '@material-ui/core/styles';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import FileCopyIcon from '@material-ui/icons/FileCopy';
import WebImage from './website.svg';

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
       <h1 className="web-intro-heading"> Convert your google sheet into website  </h1>   
       <h3 className="web-intro-dis"> Choose your next website from these templates.</h3>
     </div>
    {chooseTemplate && <>
     yo please choose template.
     <button  onClick={() => (setChooseTemplate(!chooseTemplate))}>
   yo
     </button>
    </>}
    {
      !chooseTemplate && <>
      yo this is url window.
      </>
    }
  </div>
  );
}

export default WebBulider;
