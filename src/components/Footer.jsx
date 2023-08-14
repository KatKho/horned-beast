import React from 'react';

class Footer extends React.Component {
 
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <footer>
        <h2>Ekaterina Khoroshilova</h2>
      </footer>
    )
  }
}

export default Footer;