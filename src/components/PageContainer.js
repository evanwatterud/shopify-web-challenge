import React from 'react'

import FavoriteSearch from './FavoriteSearch'
import FavoriteList from './FavoriteList'

import '../css/PageContainer.css'

class PageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { favoriteRepos: [] }
  }

  componentDidMount() {
    const repos = JSON.parse(localStorage.getItem('repos'))

    if (repos) {
      this.setState({ favoriteRepos: repos })
    }
  }

  addFavoriteRepo = (repo) => {
    const { favoriteRepos } = this.state
    localStorage.setItem('repos', JSON.stringify([...favoriteRepos, repo]))
    this.setState({ favoriteRepos: [...favoriteRepos, repo] })
  }

  removeFavoriteRepo = (repo) => {
    const { favoriteRepos } = this.state
    const newFavoriteRepos = favoriteRepos.filter(favoriteRepo => favoriteRepo !== repo)
    localStorage.setItem('repos', JSON.stringify([...newFavoriteRepos]))
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
