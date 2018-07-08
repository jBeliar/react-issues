const octokit = require('@octokit/rest')()

const getISODate = daysAgo => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString()
}

export const fetchAll = () => {
  
  return octokit.issues.getForRepo({
    owner: 'facebook',
    repo: 'react',
  
    per_page: 100,
    since: getISODate(7)
    // , milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page
  }).then(result => result.data)
}