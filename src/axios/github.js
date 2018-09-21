import axios from 'axios'
import { apiKey } from './secrets'

export const searchRepos = query => axios.get('https://api.github.com/search/repositories', {
  params: {
    q: query,
    page: 1,
    per_page: 10,
    access_token: apiKey
  }
})

export const getReleases = (owner, repo) => axios.get(`https://api.github.com/repos/${owner}/${repo}/releases`, {
  params: {
    access_token: apiKey
  }
})

export const getManyReleases = operations => axios.all(operations)
