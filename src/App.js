import React,{ useState,useRef } from 'react';
import NotesYoutubeEditor from './NotesYoutube/NotesYoutubeEditor'
import './App.css';

function App() {
  
  return (
    <div className="App">
    <NotesYoutubeEditor/>
    <div style={{position:'absolute',right:"10px",top:"270px"}}>
    <iframe width="560" height="315" className="iframe" id="iframe" src="https://www.youtube.com/embed/xEJYkRuVaNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    </div> 
    </div>
  );
}

export default App;
