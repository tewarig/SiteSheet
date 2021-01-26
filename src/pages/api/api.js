import React , {useState}from 'react';
import './api.css';
import { Button, TextField } from "@material-ui/core";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Api() {
 
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
      toast('please work');
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

  return (
    <>
    
     <h2>Convert your Google sheet into a Api.</h2>
     <TextField 
      label="Enter Url"
      variant="outlined"
      fullWidth
      onChange={getUrl}
     />
     <div>
     <Button onClick={checkUrl}> yi</Button>
     <ToastContainer />

    </div>
    { apiUrl && <span> {apiUrl} </span>}
    </>
  );
}

export default Api;
