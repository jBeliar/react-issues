const request = require('request-promise')

const url = 'https://api.github.com/repos/facebook/react/issues?state=all&per_page=100&since='

const getISODate = daysAgo => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString()
}

export const fetchAll = () => {
  return request(url + getISODate(7))
    .then(result => JSON.parse(result))
}