import { useContext } from "react"
import { InternationalizationContext } from "../contexts/InternationalizationContext"
import "./InternationalizationButton.css";
export function InternationalizationButton(){
    const {SUPPORTED_LANGUAGES, setLanguage,lookup,language} = useContext(InternationalizationContext);
    return   <select className='internationalization-button' value={language} onChange={({target})=>setLanguage(target.value)}>
        {SUPPORTED_LANGUAGES.map((value,index) => <option key={index} value={value}>{lookup("language-name",  value)}</option>)}
          </select>
}