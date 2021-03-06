import React from 'react'
import PropTypes from 'prop-types'

import '../css/RepoList.css'

const RepoList = ({ repos }) => (
  <div className="repo-list-container">
    <table className="repo-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
        </tr>
      </thead>
      <tbody>
        {repos}
      </tbody>
    </table>
  </div>
)

const Repo = ({
  repo,
  actionType,
  actionFunc,
  isFavorited
}) => (
  <React.Fragment>
    <tr className="repo">
      <td>
        <a className="repo-link" href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      </td>
      <td>{repo.language}</td>
      <td>
        {repo.latestTag}
        {!isFavorited && (
          <a className="repo-action-button" role="button" onClick={() => actionFunc(repo)} onKeyPress={() => actionFunc(repo)}>
            {actionType}
          </a>
        )
        }
      </td>
    </tr>
  </React.Fragment>
)

RepoList.propTypes = {
  repos: PropTypes.instanceOf(Array).isRequired
}

Repo.propTypes = {
  repo: PropTypes.instanceOf(Object).isRequired,
  actionType: PropTypes.string.isRequired,
  actionFunc: PropTypes.func.isRequired,
  isFavorited: PropTypes.bool
}

Repo.defaultProps = {
  isFavorited: false
}

export {
  RepoList,
  Repo
}
