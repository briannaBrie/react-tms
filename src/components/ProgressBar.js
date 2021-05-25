import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} =useStorage(file)

    //console.log(progress, url)
    //reset the value of file back to null to hide the progress bar
    // once its all uploaded and you have a url at bar=100%

    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        //make the value of hte progress to be the width of the progressbar
        //from 0 - 100
        <motion.div className = "progress-bar" 
            initial = {{width:0}}
            animate = {{width: progress + '%'}}>
        </motion.div>
    )
}

export default ProgressBar
