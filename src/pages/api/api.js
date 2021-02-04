import React , {useState}from 'react';
import './api.css';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ApiImage from './api.svg';

import FileCopyIcon from '@material-ui/icons/FileCopy';


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
      fontWeight: 500,
    
  },
  
}) );

function Api() {
  const classes = styles();

 
  var [url ,setUrl ] = useState(null);
  var [apiUrl , setApiUrl] = useState(null);

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
      var temp = 'https://spreadsheets.google.com/feeds/list/' + uniqueID + '/od6/public/basic?alt=json ';
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
    <div className="api-back">
     <div className="api-details">
     <h1 className="api-heading">Convert your Google sheet into a Api.</h1>
     <div className="api-dis">
   { !apiUrl && <> <span className="api-dis-text"> Make sure you have publised you google sheet to web ,then share your google sheet url.</span> 
   
    
     <TextField 
      label="Enter Url"
      variant="outlined"
      fullWidth
      onChange={getUrl}
      style={{
        color: '#47ff8c',

      }}
      className={classes.textField}

  

     >
       </TextField>
     <Button 
     style={{            
      backgroundColor: "#787c7a",
      color:"#47ff8c",     
      borderColor: "#787c7a",
      textDecoration: false,
      marginLeft: '1%',
    
       

  }}
     onClick={checkUrl} > <div className="api-button-text">GO</div></Button>
    </>
  }  <div>
     <ToastContainer />

    </div>
    { apiUrl &&<> 
      <span className="api-dis-text"> This is your api end point copy it and use it in your web application.</span> 
    <TextField    
      variant="outlined"
      fullWidth
      defaultValue={apiUrl}
      style={{
        color: '#47ff8c',

      }}
      className={classes.textField}

  

     />
    
    <Button 
     style={{            
      backgroundColor: "#787c7a",
      color:"#47ff8c",     
      borderColor: "#787c7a",
      textDecoration: false,
      marginLeft: '1%',
    
       

  }}
     onClick={copyCodeToClipboard} > <div className="api-button-text"> <FileCopyIcon /> </div></Button>
     </>}
    </div>
    </div>

    <img src={ApiImage} alt="api-image" className="api-image"/>
    </div>
  );
}

export default Api;
