import React from 'react';
import HornedBeast from './HornedBeast';
import unicornImage from '../img/unicorn.png';
import mooseImage from '../img/moose.png';

class Gallery extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <HornedBeast
        title="Unicorn"
        imageUrl={unicornImage}
        description="Description for Unicorn"
      />
      <HornedBeast
        title="Moose"
        imageUrl={mooseImage}
        description="Description for Moose"
      />
    </div>
    )
  }
}

export default Gallery;