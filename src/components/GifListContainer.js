import React, { useEffect, useState } from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {

    const [listOfGIF, setListOfGIF] = useState([])
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=abegCOAoi5VwK3opmg2cdf1UeuGQFJmQ&rating=g", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            setAllData(data.data)
            setListOfGIF([data.data[0],data.data[1], data.data[2]])
        });
    },[listOfGIF])

    function handleSubmit(event) {
        event.preventDefault();
        setAllData(allData.filter((data) => {
            if(data.title.includes(event.target.value)) {console.log(data.title); return true}
            else return false;
        }))
        
    }


  return (
    <div>
        <GifList listOfGIF={listOfGIF} style={{display:"inline-block"}}/>
        <GifSearch handleSubmit={handleSubmit} style={{display:"inline-block"}}/>
    </div>
    

  )

}

export default GifListContainer