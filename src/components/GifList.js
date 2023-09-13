import React from 'react'

function GifList({ listOfGIF }) {
  return (
    <div>
        {/* <ul> */}
            {listOfGIF.map((gifData) => {
                return (<li key={gifData.id}><img src={gifData.images.original.url} alt=''/></li>)
            })}
        {/* </ul> */}
    </div>
  )
}

export default GifList