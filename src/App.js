import './App.css';
import React from 'react';
import Header from './Components/HeaderSection';
import Footer from './Components/FooterSection';
import Items from './Components/Items';
import Categories from './Components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Avocado',
          img: 'https://static.onecms.io/wp-content/uploads/sites/24/2018/12/gettyimages-186466133-2000.jpg',
          desc: 'Lorem ...',
          category: 'Avocados',
          price: '59.45',
        },
        {
          id: 2,
          title: 'Lemon',
          img: 'https://media.istockphoto.com/photos/lemon-picture-id663568532?k=20&m=663568532&s=612x612&w=0&h=-YdJMUlvTTipQkhCdKhmRF8Y-LUornyNan_1A1q5_4k=',
          desc: 'Lorem ...',
          category: 'Lemons',
          price: '59.45',
        },
        {
          id: 3,
          title: 'Kiwi',
          img: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/03/kiwi.jpg',
          desc: 'Lorem ...',
          category: 'Kiwis',
          price: '59.45',
        },
        {
          id: 4,
          title: 'Banana',
          img: 'https://gardenerspath.com/wp-content/uploads/2019/12/Banana-Plant-with-Ripe-Fruit.jpg',
          desc: 'Lorem ...',
          category: 'Bananas',
          price: '59.45',
        },
        {
          id: 5,
          title: 'Pineapple',
          img: 'https://img.freepik.com/foto-gratis/pina-grupo-tiene-ojos-rosados-arboles-pina-cultivan-frutas-tropicales-jardines-plantacion-pinas_217593-5592.jpg',
          desc: 'Lorem ...',
          category: 'Pineapples',
          price: '59.45',
        },
        {
          id: 6,
          title: 'Mango',
          img: 'https://treejourney.com/wp-content/uploads/2022/01/113773957_l-scaled.jpg',
          desc: 'Lorem ...',
          category: 'Mangos',
          price: '59.45',
        },
      ],
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isArray = true;
    });
    if (!isArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
