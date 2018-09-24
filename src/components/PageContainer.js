import React from 'react'

import FavoriteSearch from './FavoriteSearch'
import FavoriteList from './FavoriteList'

import '../css/PageContainer.css'

class PageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { favoriteRepos: [] }
  }

  addFavoriteRepo = (repo) => {
    const { favoriteRepos } = this.state
    this.setState({ favoriteRepos: [...favoriteRepos, repo] })
  }

  removeFavoriteRepo = (repo) => {
    const { favoriteRepos } = this.state
    const newFavoriteRepos = favoriteRepos.filter(favoriteRepo => favoriteRepo !== repo)
    this.setState({ favoriteRepos: newFavoriteRepos })
  }

  render() {
    const { favoriteRepos } = this.state

    return (
      <div className="page-container">
        <FavoriteSearch favoriteRepos={favoriteRepos} addFavoriteRepo={this.addFavoriteRepo} />
        <FavoriteList favoriteRepos={favoriteRepos} removeFavoriteRepo={this.removeFavoriteRepo} />
      </div>
    )
  }
}

export default PageContainer
