import React from 'react';

import Repo from './repo';

const RepoList = ({repos}) => {
  const reposElements = repos.map((repo, index) => <Repo id={index} repo={repo} />);

  return (
    <section className='repo-list'>
      {reposElements}
    </section>
  );
}

export default RepoList;
