//Custom hook used to save data to firestore and storage to be later displayed

import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../firebase/Config'

const useStorage = (file) =>{
    const[progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const[url, setUrl] = useState(null)

    useEffect(() => {
        //references for saving url to Firebase storage
        const storageRef = projectStorage.ref(file.name)

        //collection reference to use our document to for firestore
        const collectionRef = projectFirestore.collection('images')

        //put the file in the references
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100
            setProgress(percentage)
        }, (err) =>{
            setError(err)
        },async() =>{
            //image is saved to firebase storage
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt})
            setUrl(url)
        })

    }, [file])

    return {progress, error, url}
}

export default useStorage;