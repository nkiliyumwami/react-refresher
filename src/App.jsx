import React, {Component} from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'


class App extends Component {
    //State
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //get the search term: search or filter functionality
    onSearchChange =(event) => {
        this.setState({searchfield: event.target.value})
    }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App