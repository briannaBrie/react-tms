import React, {useState} from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    //use the useState hook
    const[file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const imgTypes = ['image/png','image/jpg','image/jpeg'];

    const changeHandler = (e) => {
        //access the file seleted by the user
        let selected = e.target.files[0]//first file choosen

        //check if there is a file selected and has the correct image type
        if(selected && imgTypes.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError('Please select a correct image file (.png, .jpg or .jpeg)')
        }
    }

    return (
        //if there is an error show it
        //if there's a file show the name, and the progress bar
        <form>
            <label>
                <input type = "file" onChange = {changeHandler}/>
                <span>+</span>
            </label>
            
            <div className ="output">
                {error && <div className = "error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file = {file} setFile = {setFile}/>}
            </div>
        </form>
    );
}

export default UploadForm;
