import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) => {

const handleClick = (e) =>{
    if(e.target.classList.contains('backdrop')){
        //if selectedImg = null modal collapses and is not shown
        setSelectedImg(null)
    }
    
}

    return (
        <motion.div className  ="backdrop" onClick = {handleClick}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}>
            <motion.img src = {selectedImg} alt = "Unlarged Delicacy"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}/>
        </motion.div>
    )
}

export default Modal
