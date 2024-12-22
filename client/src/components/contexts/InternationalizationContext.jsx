import { createContext, useEffect, useState } from "react"

const getLanguage = () => navigator.userLanguage || navigator.language;

const DEFAULT_LANGUAGE = "en-US";
const SUPPORTED_LANGUAGES = ["en-US","pl-PL"];

export const InternationalizationContext = createContext({})

const checkIfLanguageSupported = (check) => {
    return SUPPORTED_LANGUAGES.find(language=> language === check) || DEFAULT_LANGUAGE ;
};
/// PLEASE IN THE FUTURE MAKE IT LOAD FROM A DB
const LOOKUP_TABLE = {
    "en-US":{
        "language-name":"ENG",
        "all":"All",
        "finished":"Finished",
        "work-in-progress":"Work in progress",
        'filter-and-sorting':"Filters and sorting",
        "default":"Default",
        "latest":"Latest",
        "oldest":"Oldest",
        "alphabetically-ascending":"Alphabetically ascending",
        "alphabetically-descending": "Alphabetically descending",
        "about-me": "About me",
        'about-me-alt':"About me",
        'portfolio':"Portfolio",
        "contact-me":"Contact me!",
        "github-account":"Github account",
        'more-projects-at':"More projects at",
        'you-are-here': "You are here!",
        "portfolio-description":"See in practice my projects!",
        "copyright":"Copyright",
        "story":`## A little about me!

I have had contact with computers since birth, but I have been formally learning programming since 2018, when I learned the python language in computer science classes at school. Since then, my interest in programming and computing in general grew - I learned new programming languages, technologies or operating systems.

In my short career, I used:


* frontend: html, css, js, tailwindcss, react, vue
* backend: node js, express, socket.io, oauth, jwt,
* databases: mysql, mongodb, postgresql.
* devops: git, github, npm, cloudflare.
* languages: javascript, python, c++.
* tools: visual studio code, postman, vim
* operating systems: gnu/linux - debian, ubuntu, arch, fedora
* virtual machines: qemu/kvm, proxmox`
    },
    "pl-PL": {
        "language-name":"PL",
        "all":"Wszystkie",
        "finished":"Ukonczone",
        "work-in-progress":"W toku",
        'filter-and-sorting':"Filtry i sortowanie",
        "default":"Domyślny",
        "latest":"Najnowsze",
        "oldest":'Najstarsze',
        "contact-me":"Kontakt",
        "github-account":"Konto github",
        "alphabetically-ascending":"Alfabetycznie rosnąco",
        "alphabetically-descending":  "Alfabetycznie malejąco",       
        "about-me": "O mnie",
        'about-me-alt':"Poznaj mnie",
        'portfolio':"Portfolio",
        'more-projects-at':"Więcej projektów na",
        'you-are-here': "Jesteś tutaj!",
        "portfolio-description":"Zobacz praktycznie moje projekty!",
        "copyright":"Wszelkie prawa zastreżone",
        "story":`## Trochę o mnie!

Z komputerami miałem styczność od urodzenia, jednak formalnie uczę się programowania od 2018 roku, kiedy na lekcjach informatyki w szkole poznałem język python. Od tamtego czasu moje zainteresowanie programowaniem i informatyką ogólnie rosło - uczyłem się nowych języków programowania, technologii czy systemów operacyjnych.

W swojej niedługiej karierze, korzystałem z:


*   frontend: html, css, js, tailwindcss, react, vue
*   backend: node js, express, socket.io, oauth, jwt,
*   bazy danych: mysql, mongodb, postgresql
*   devops: git, github, npm, cloudflare
*   języki: javascript, python, c++
*   narzędzia: visual studio code, postman, vim
*   systemy operacyjne: gnu/linux - debian, ubuntu, arch, fedora
*   maszyny wirtualne: qemu/kvm, proxmox`
    },    
    "de-DE":{
        "language-name":"Deutsch",
        "all":"Alle",
        "finished":"Abgeschlossen",
        "work-in-progress":"Im Arbeit",
        'filter-and-sorting':"Filter und Sortierung",
        "default":"Standard",
        "latest":"Neueste",
        "oldest":"Älteste",
        "alphabetically-ascending":"Alphabetisch aufsteigend",
        "alphabetically-descending":  "Alphabetisch absteigend",       
        "about-me": "Über mich",
        'about-me-alt':"Einführung",
        'portfolio':"Portfolio",
        'more-projects-at':"Weitere Projekte bei",
        'you-are-here':  "Sie sind hier!",
        "portfolio-description":"Zeige mir die praktischen meine Projekte!",
        "copyright":"Alle Rechte vorbehalten",
    }
}

export const InternationalizationContextProvider = ( { children }) => { 
    // PLEASE READ FROM LOCAL STORAGE ALSO OK? AND CREATE A MODAL THAT SAYS WHICH LANGUAGE HAS BEEN AUTODETECTED AND SHIT AND COOKIES OK???
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE) ;  
    const [isReady, setReady] = useState(false); 
    useEffect(()=>{
        if(!localStorage.getItem('language')){
            const userLanguage = checkIfLanguageSupported(getLanguage())
            setReady(true);
            setLanguage(userLanguage);
            localStorage.setItem('language',userLanguage);
        }else{
            setReady(true);
            setLanguage(localStorage.getItem('language'))
        }
    },[]);
    useEffect(()=>{
        if(!isReady) return;
        localStorage.setItem('language',language)
    },[language])

    const lookup = (word,lang = language) => (LOOKUP_TABLE[lang][word]) ? LOOKUP_TABLE[lang][word] : LOOKUP_TABLE[DEFAULT_LANGUAGE][word] ;

    return ( <InternationalizationContext.Provider value={{DEFAULT_LANGUAGE,SUPPORTED_LANGUAGES,lookup, language,setLanguage}}>
        {children}
    </InternationalizationContext.Provider>);
}