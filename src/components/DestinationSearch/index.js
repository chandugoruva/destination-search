import './index.css'
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state: {
    inputSearch: ' ',
  }

  searchElement = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const inputSearchElement = destinationsList.filter(each =>
      each.name.includes(inputSearch),
    )

    return (
      <div className="bg-color">
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.searchElement}
          className="for-search"
          placeholder="Search"
          value={inputSearch}
        />
        <ul>
          {inputSearchElement.map(eachUser => (
            <DestinationItem each={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
