import React from 'react';

  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Test(){
    const notify = () => toast.success("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
       
      </div>
    );
  }

  export default Test