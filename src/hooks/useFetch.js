import {useEffect, useState} from 'react';


const useFetch = (url, item) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            try {
                const info = await fetch(url);
                if(!info.ok){
                    throw new Error('Error http' + info.status);
                }else{
                    const jsonInfo = await info.json();
                    setData(jsonInfo);
                }
            }
            catch(e){
                console.log(e.name + " " + e.message);
                setError(e.message);
            }
        }
        getData(url);
    }, [item])
    return [data, error];
}

export default useFetch;
