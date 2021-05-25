import {useEffect, useState} from 'react'
import {projectFirestore} from '../firebase/Config'

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);

    //database communication
    useEffect(() =>{
        const unsub = projectFirestore.collection(collection)
        //order by newest first
        .orderBy('createdAt', 'desc')
        //takes a real time snap shot of firestore and update the collection 
        //upon any changes
        .onSnapshot((snap)=> {
            let documents = [];
            //loop thru the current items in the database
            snap.forEach(doc =>{
                //fetch data in docs
                documents.push({...doc.data(), id:doc.id})
            })
            setDocs(documents)
        })
        return () => unsub()
    }, [collection])
    return {docs};
}

export default useFirestore
