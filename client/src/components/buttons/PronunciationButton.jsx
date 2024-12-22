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

    return <button className='no-appearance' onClick={()=>playAudio()}>
        <PiSpeakerHighFill size={25}/>
    </button> 
    
}
