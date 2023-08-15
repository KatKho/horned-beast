import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeastValues from '../assets/data.json';



class Gallery extends React.Component {
 
  render() {
    return (
        <section>
          {hornedBeastValues.map((beast, idx) => (
              <HornedBeast key={idx} title={beast.title} image_url={beast.image_url} description={beast.description}/>
          ))}
      </section>
    )
  }
}

export default Gallery;