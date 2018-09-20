import React from 'react'

import FavoriteSearch from './FavoriteSearch'
import FavoriteList from './FavoriteList'

import '../css/PageContainer.css'

const PageContainer = () => (
  <div className="page-container">
    <FavoriteSearch />
    <FavoriteList />
  </div>
)

export default PageContainer
