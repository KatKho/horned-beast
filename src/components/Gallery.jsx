import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeastValues from '../assets/data.json';

class Gallery extends React.Component {
 

  render() {
    return (
    <div>
        {hornedBeastValues.map((beast, idx) => <HornedBeast key={idx} title={beast.title} image_url={beast.image_url} description={beast.description} />)}
      {/* <HornedBeast
        title="Unicorn"
        imageUrl={unicornImage}
        description="Description for Unicorn"
      />
      <HornedBeast
        title="Moose"
        imageUrl={mooseImage}
        description="Description for Moose"
      /> */}
    </div>
    )
  }
}

export default Gallery;