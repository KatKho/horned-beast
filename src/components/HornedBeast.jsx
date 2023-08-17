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
    const { openModal, title, image_url, description } = this.props;

    return (
      <Card style={{ width: '18rem', height: '29rem' }} onClick={() => openModal(title, image_url, description)}>
        <Card.Img src={image_url} alt={title} title={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faHeart} onClick={this.handleClick} />
            <span>{this.state.count}</span>
          </Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

