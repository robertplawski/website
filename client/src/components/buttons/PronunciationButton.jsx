import {PiSpeakerHighFill} from 'react-icons/pi'; 
import pronunciationAudio from "../../assets/pronunciation.wav";
import { useEffect, useRef } from 'react';

export function PronunciationButton(){
    const audioRef = useRef(null);
    useEffect(()=>{
        audioRef.current = new Audio(pronunciationAudio);
    })
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    return <button style={{cursor:"pointer",border:0,padding:'0.2rem',borderRadius:'10px'}} onClick={()=>playAudio()}>
        <PiSpeakerHighFill size={25}/>
    </button> 
    
}
