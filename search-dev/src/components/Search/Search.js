import React, { Component } from 'react'
import SearchContainer from './styled'
class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <h1>Search Dev</h1>
        <div>
          <input placeholder="Type the username here ..." />
          <button>Buscar</button>
        </div>
      </SearchContainer>
    )
  }
}

export default Search
