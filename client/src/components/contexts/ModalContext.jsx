import { createContext, useEffect, useRef, useState } from "react"
import './ModalContext.css';
import { FaCross, FaX } from "react-icons/fa6";

export const ModalContext = createContext({})


export const ModalContextProvider = ( { children }) => { 
    const closeRef = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const [modal,setModal] = useState()
    const spawnButtonRef = useRef();

    const openModal = (modal,spawnButton) => {
        spawnButtonRef.current = spawnButton;
        setModal(modal)
        setModalOpen(true)
        closeRef.current.focus()
    }

    const closeModal = () => {
        spawnButtonRef.current.focus();
        setModalOpen(false)
        setTimeout(()=>setModal(),300)
    }


    return <ModalContext.Provider value={{openModal,closeModal,isModalOpen}}>
        {children}
        <div  className={"modal-background-container " + (!isModalOpen && 'hidden')}>
            <div className="modal-container">
            <button ref={closeRef} onClick={()=>closeModal()} className="no-appearance modal-close-button">
                    <FaX size={16}/>
                </button>
                {modal}
      
            </div>
        </div>
    </ModalContext.Provider>
}