import React from 'react'
import PropTypes from 'prop-types'

import { Repo, RepoList } from './RepoList'

import '../css/FavoriteList.css'

const FavoriteList = ({ favoriteRepos, removeFavoriteRepo }) => {
  const repos = favoriteRepos.map(repo => <Repo key={repo.name} repo={repo} actionType="Remove" actionFunc={removeFavoriteRepo} />)

  return (
    <div className="favorite-list-container">
      <div className="panel-layout-container">
        <RepoList repos={repos} />
      </div>
    </div>
  )
}

FavoriteList.propTypes = {
  favoriteRepos: PropTypes.instanceOf(Array).isRequired,
  removeFavoriteRepo: PropTypes.func.isRequired
}

export default FavoriteList
