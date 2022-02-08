import { useState,useRef } from 'react';
import ActionEvent from './ActionEvent.js';
import NotesYoutubeEditor from './NotesYoutube/NotesYoutubeEditor'
import './App.css';

function App() {
  const [data,setData]=useState();
  const inputValue=useRef();
  function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
  
  const check=()=>{
    alert(isValidURL(data)); 
    
  }
  
  return (
    <div className="App">
    <NotesYoutubeEditor/>
    <div style={{position:'absolute',right:"10px",top:"270px"}}>
   <iframe width="560"   height="315" className="iframe" id="iframe" src="https://www.youtube.com/embed/xEJYkRuVaNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> 
    </div>
  );
}

export default App;
