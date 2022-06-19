import './App.css';
import React from 'react';
import Header from './Components/HeaderSection';
import Footer from './Components/FooterSection';
import Items from './Components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Avocado',
          img: 'avocado.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 1,
          title: 'Lemon',
          img: 'lemon.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
