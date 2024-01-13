import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кровать',
          img: 'bed.jpeg',
          price: '80000',
          category: 'bed'
        },
        {
          id: 2,
          title: 'Кресло',
          img: 'chair.jpeg',
          price: '20000',
          category: 'chair'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa3.jpg',
          price: '180000',
          category: 'sofa'
        },
        {
          id: 4,
          title: 'Желтый диван',
          img: 'sofa.jpeg',
          price: '12000',
          category: 'sofa'
        },
        {
          id: 5,
          title: 'Кровать',
          img: 'bed2.jpeg',
          price: '60000',
          category: 'bed'
        },
        {
          id: 6,
          title: 'Белый диван',
          img: 'sofaw.jpeg',
          price: '100000',
          category: 'sofa'
        },
        {
          id: 7,
          title: 'Кресло',
          img: 'chair2.jpeg',
          price: '20000',
          category: 'chair'
        },
        {
          id: 8,
          title: 'Стол',
          img: 'table.jpeg',
          price: '30000',
          category: 'table'
        },
        {
          id: 9,
          title: 'Кресло',
          img: 'chair3.jpeg',
          price: '15000',
          category: 'chair'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ ShowFullItem: !this.state.ShowFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}


export default App;
