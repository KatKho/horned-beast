import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
      };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        {/* <button  onClick={this.handleClick}>Favorite Me!</button> */}
        <div>
        <FontAwesomeIcon icon={faHeart} onClick={this.handleClick}  />
        <p>{this.state.count}</p>
        </div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;
