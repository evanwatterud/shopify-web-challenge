import React from 'react'
import PropTypes from 'prop-types'

import FavoriteSearchForm from './FavoriteSearchForm'
import { RepoList, Repo } from './RepoList'
import * as githubApi from '../axios/github'

import '../css/FavoriteSearch.css'

class FavoriteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = { searchResults: [], error: null }
  }

  formSubmit = (event, query) => {
    this.setState({ searchResults: [] }) // Clear the search results if a new search comes in

    githubApi.searchRepos(query) // Query the github api to search for repos matching a query string
      .then((response) => {
        const operations = []
        response.data.items.forEach((repo) => { // Iterate over the repos returned from the search and get their releases
          operations.push(githubApi.getReleases(repo.owner.login, repo.name))
        })
        githubApi.getManyReleases(operations) // Wait for the releases in the correct order using axios.all, then update the state with formatted results of the search
          .then((releases) => {
            response.data.items.forEach((repo, index) => {
              const { searchResults } = this.state
              const formattedResult = {
                name: repo.full_name,
                language: repo.language,
                latestTag: releases[index].data.length === 0 ? '-' : releases[index].data[0].name
              }
              this.setState({ searchResults: [...searchResults, formattedResult] })
            })
          })
          .catch(err => this.setState({ error: err }))
      })
      .catch(err => this.setState({ error: err }))

    event.preventDefault()
  }

  render() {
    const { searchResults, error } = this.state
    const { addFavoriteRepo, favoriteRepos } = this.props

    const repos = searchResults.map(searchResult => <Repo key={searchResult.name} repo={searchResult} actionType="Add" actionFunc={addFavoriteRepo} isFavorited={favoriteRepos.indexOf(searchResult) !== -1} />)

    return (
      <div className="favorite-search-container">
        <div className="panel-layout-container">
          <FavoriteSearchForm formSubmit={this.formSubmit} />
          <RepoList repos={repos} />
          {error && <span>{error.message}</span>}
        </div>
      </div>
    )
  }
}

FavoriteSearch.propTypes = {
  addFavoriteRepo: PropTypes.func.isRequired,
  favoriteRepos: PropTypes.instanceOf(Array).isRequired
}

export default FavoriteSearch
