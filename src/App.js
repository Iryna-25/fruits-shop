import './App.css';
import React from 'react';
import Header from './Components/HeaderSection';
import Footer from './Components/FooterSection';
import Items from './Components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Avocado',
          img: 'https://static.onecms.io/wp-content/uploads/sites/24/2018/12/gettyimages-186466133-2000.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 2,
          title: 'Lemon',
          img: 'https://media.istockphoto.com/photos/lemon-picture-id663568532?k=20&m=663568532&s=612x612&w=0&h=-YdJMUlvTTipQkhCdKhmRF8Y-LUornyNan_1A1q5_4k=',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 3,
          title: 'Kiwi',
          img: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/03/kiwi.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 4,
          title: 'Banana',
          img: 'https://gardenerspath.com/wp-content/uploads/2019/12/Banana-Plant-with-Ripe-Fruit.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 5,
          title: 'Pineapple',
          img: 'https://img.freepik.com/foto-gratis/pina-grupo-tiene-ojos-rosados-arboles-pina-cultivan-frutas-tropicales-jardines-plantacion-pinas_217593-5592.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
        {
          id: 6,
          title: 'Mango',
          img: 'https://treejourney.com/wp-content/uploads/2022/01/113773957_l-scaled.jpg',
          desc: 'Lorem ...',
          category: '',
          price: '59.45',
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    this.setState({ oders: [...this.state.oders, item] }, () => {
      console.log(this.state.orders);
    });
  }
}

export default App;
