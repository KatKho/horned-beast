import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import hornedBeastValues from './assets/data.json';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: null,
      filterValue: 'all', 
    };
  }

  openModal = (title, image_url, description) => {
    const selectedBeast = { title, image_url, description };
    this.setState({ showModal: true, selectedBeast });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedBeast: null });
  };

  handleChange = (event) => {
    const filterValue = event.target.value;
    this.setState({ filterValue });
  };  

render() {

  return (
    <>
      <div>
        <Header />
        <Filter handleChange={this.handleChange} />
        <Gallery
          beastData={hornedBeastValues.filter(beast =>
            this.state.filterValue === 'all' ? true : beast.horns.toString() === this.state.filterValue
          )}
          openModal={this.openModal}
        />
        <SelectedBeast showModal={this.state.showModal} closeModal={this.closeModal} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>
    </>
  );
}
}

export default App;
