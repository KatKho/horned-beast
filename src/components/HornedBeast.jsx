import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Card from 'react-bootstrap/Card';

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
      <Card>
        <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
       <Card.Text>  <FontAwesomeIcon icon={faHeart} onClick={this.handleClick}  /><span>{this.state.count}</span> </Card.Text>
       <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
