import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cardList/cardList.component.js';
import SearchBox from './components/searchBox/searchBox.component.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {name: 'Frankenstein', id:'1'},
        {name: 'Dracula', id: '2'},
        {name: 'Zombie', id: '3'}
      ],
      searchField: ''
    };

  }

  //called after this component rendered to DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange(value) {
    this.setState({...this.state, searchField: value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 class="title">Monsters Rolodex</h1>
        <SearchBox placeHolder='search monsters' onChange={(e) => this.handleChange(e.target.value)} value={this.state.searchField} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
