import React from 'react'

import FavoriteSearchForm from './FavoriteSearchForm'
import RepoList from './RepoList'

import '../css/FavoriteSearch.css'

class FavoriteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = { searchResults: [] }
  }

  formSubmit = (event, query) => {
    event.preventDefault()
  }

  render() {
    const { searchResults } = this.state

    return (
      <div className="favorite-search-container">
        <div className="panel-layout-container">
          <FavoriteSearchForm formSubmit={this.formSubmit} />
          <RepoList searchResults={searchResults} />
        </div>
      </div>
    )
  }
}

export default FavoriteSearch
