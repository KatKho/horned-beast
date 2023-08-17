import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {
  render() {
    const { beastData, openModal } = this.props;

    
    return (
      <Container>
        <Row>
          {beastData.map((beast, idx) => {
            if (beastData.length === 2) {
              return (
                <Col key={idx} xs={12} md={6} className="mb-4">
                  <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    openModal={openModal}
                  />
                </Col>
              );
            } else {
              return (
                <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    openModal={openModal}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    );
  }
}


export default Gallery;
