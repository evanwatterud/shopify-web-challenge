import React from 'react'
import PropTypes from 'prop-types'

class FavoriteSearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { query: '' }
  }

  handleChange(key, value) {
    const { clearList } = this.props
    if (key === 'query' && value === '') {
      clearList()
    }
    this.setState({ [key]: value })
  }

  render() {
    const { formSubmit } = this.props
    const { query } = this.state

    const isInvalid = query === ''

    return (
      <form className="favorite-search-form" onSubmit={event => formSubmit(event, query)}>
        <input
          value={query}
          onChange={event => this.handleChange('query', event.target.value)}
          type="text"
        />
        <button disabled={isInvalid} type="submit">Search</button>
      </form>
    )
  }
}

FavoriteSearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired
}

export default FavoriteSearchForm
