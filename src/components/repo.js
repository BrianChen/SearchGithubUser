import React from 'react';

// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const Repo = ({repo}) => {
  return (
    <div className='repo'>
      <a className='repo__name' href={repo.html_url}>{repo.name}</a>
      <p className='repo__desc'>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Open Issues: {repo.open_issues_count}</p>
      <p>Repo Size: {repo.size}</p>
    </div>
  );
}

export default Repo;
