import React, { Component } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';

class App extends Component {

  filters = [
    { name: 'All', value: 'all' },
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  initialItems = [
    { name: 'Steak', type: 'meat', quantity: 3 },
    { name: 'Apples', type: 'prod', quantity: 4 },
    { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
    { name: 'Baguettes', type: 'bakery', quantity: 2 },
  ];

  state = {
    items: this.initialItems,
    type: "All"
  }

  incrementItemQuantity = (index) => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    })
  };

  decrementItemQuantity = (index) => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    this.setState({
      items: updatedItems 
      
    })
  };
  
  addItem = item => this.setState({ items: [...this.state.items, item]});
  handleFilterClick = type => this.setState({type}); 


  render() {
    
    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>
        <Form onSubmit={this.addItem} type={this.state.type} />
        <Filters filters={this.filters} onFilterClick={this.handleFilterClick}/>
        <List
          items={this.state.items}
          incrementItem={this.incrementItemQuantity}
          decrementItem={this.decrementItemQuantity}
        />
      </main>
    );
  }

};

export default App;
