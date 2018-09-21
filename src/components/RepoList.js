import React from 'react'
import PropTypes from 'prop-types'

import '../css/RepoList.css'

const RepoList = ({ repos }) => (
  <table className="repo-list">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Latest tag</th>
        <th />
      </tr>
      {repos}
    </tbody>
  </table>
)

const Repo = ({ repo, actionType, actionFunc }) => (
  <tr className="repo">
    <td>{repo.name}</td>
    <td>{repo.language}</td>
    <td>{repo.latestTag}</td>
    <td></td>
  </tr>
)

RepoList.propTypes = {
  repos: PropTypes.instanceOf(Array).isRequired
}

Repo.propTypes = {
  repo: PropTypes.instanceOf(Object).isRequired,
  actionType: PropTypes.string.isRequired,
  actionFunc: PropTypes.func.isRequired
}

export {
  RepoList,
  Repo
}
