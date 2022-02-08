import React, { useRef, useState } from 'react'
import close from './close.png'
import ScreenShort from './ScreenShort'
import {BiNote} from 'react-icons/bi'; 
import './NotesYoutubeEditor.css'

function NotesYoutubeEditor() {

    const [notesActiveYoutube,setnotesActiveYoutube]=useState(false)
    const [screenCapture,setscreenCapture]=useState("")
    const [NotesContent,setNotesContent]=useState("")
    const notesIcon=useRef()
    const notesDiv=useRef()
    const crossIcon=useRef()
    const notesIconColor=useRef()
    const screenShortIcon=useRef()
    let [PictureCaptured,setPictureCaptured]=useState(screenCapture!=="")
    
    const [mouseOverScreenShortIcon,setmouseOverScreenShortIcon]=useState(false)


    const notesIconMove=()=>{
        notesDiv.current.style.backgroundColor="#0009"
        setnotesActiveYoutube(true)
        
       
        setTimeout(() => {
        notesIcon.current.style.backgroundColor="black"
        notesIcon.current.style.border="2px solid cadetblue"
        notesIcon.current.style.transform="rotate(90deg)"
        notesDiv.current.style.width="311px"
        notesDiv.current.style.height="560px"
        crossIcon.current.style.display="block"
        crossIcon.current.style.transitionDuration="0.2s"
        screenShortIcon.current.style.display="block"

        setTimeout(() => {
           
        crossIcon.current.style.left="290px"
        screenShortIcon.current.style.left="233px"
        crossIcon.current.style.opacity=1 
        screenShortIcon.current.style.opacity=1
    
    }, 50);
        },200)
    }
    const moveBack=()=>{
        setnotesActiveYoutube(false)
        notesIcon.current.style.transform="rotate(0deg)"
        notesIcon.current.style.backgroundColor="cadetblue"
        notesIcon.current.style.border="none"        
        notesDiv.current.style.width="10px"
        notesDiv.current.style.height="10px"
        notesDiv.current.style.backgroundColor="red"
        notesDiv.current.style.border="none"
        screenShortIcon.current.style.display="none"
        crossIcon.current.style.left="20px"
        crossIcon.current.style.opacity=0
        screenShortIcon.current.style.opacity=0
        screenShortIcon.current.style.left="20px"

        setTimeout(() => {crossIcon.current.style.display="none"}, 100);

    }

    const showAddNotes=()=>{
        if(!notesActiveYoutube){

        }
    }

    const toolbar=document.getElementsByClassName("ytp-expand-pause-overlay")[0]
    
    if(toolbar!==undefined){
        toolbar.style.display="none"
    }

    const show=()=>{

        const text=document.getElementById("notes-yt-notesDiv")
        if(text!==null){

            const image=document.createElement("img")
            image.src=`${screenCapture}`
            image.style.width="40%"
            image.style.height="20%"
            text.appendChild(image)

            // const a=window.frames[0].frameElement.contentWindow.print();
            // console.log(a);
        }
    }

    

    return (
        <div id="yt-notes">
             <div id="note-yt-cross" onClick={moveBack} ref={crossIcon}>
                <img src={close}  id="note-yt-cross-icon"/>
            </div>

            <div id="notes-screenshort" ref={screenShortIcon} onMouseEnter={()=>setmouseOverScreenShortIcon(true)} onMouseLeave={()=>setmouseOverScreenShortIcon(false)}>
            
            <ScreenShort mouseOverScreenShortIcon={mouseOverScreenShortIcon} setscreenCapture={setscreenCapture} setPictureCaptured={setPictureCaptured}/>
            </div>
{/*             
            <div id="notes-yt_icon-div" ref={notesIcon} onClick={notesIconMove} >            
                <BiNote size={40} id="note-yt-icon" style={{color:notesActiveYoutube?"white":"black"}} onClick={notesIconMove} />
            </div>           */}

            <div id="check-screenshort-image-div" style={{display:PictureCaptured?"flex":"none"}}>
                <img src={close} id="screenshort-close-icon" onClick={()=>{setscreenCapture(null);setPictureCaptured(false)}}/>
                <img src={screenCapture} id="screenshort-image"/>
            </div>  


        </div>
    )
}

export default NotesYoutubeEditor

