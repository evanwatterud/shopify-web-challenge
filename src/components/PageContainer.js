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

  render() {
    const { favoriteRepos } = this.state

    return (
      <div className="page-container">
        <FavoriteSearch addFavoriteRepo={this.addFavoriteRepo} />
        <FavoriteList repos={favoriteRepos} />
      </div>
    )
  }
}

export default PageContainer
