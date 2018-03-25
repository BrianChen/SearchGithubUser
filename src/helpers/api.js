export const fetchGithubUser = (username, successCb, errorCb) => {
  const userUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos`;

  const userAPIRequest = fetch(userUrl).then((res) => {
    if (res.status >= 400) {
      return res.json().then(err => Promise.reject(err.message));
    }

    return res.json();
  });

  const repoAPIRequest = fetch(reposUrl).then((res) => {
    if (res.status >= 400) {
      return res.json().then(err => Promise.reject(err.message));
    }

    return res.json();
  });

  let data = {'user': {}, 'repos': {}};

  const promise = Promise.all([
    userAPIRequest,
    repoAPIRequest,
  ]).then(([userRes, reposRes]) => {
    data['user'] = userRes;
    data['repos'] = reposRes;
    return data;
  })
  .catch((err) => {
    return err.message;
  });

  promise.then(json => {
    if (typeof successCb === 'function') {
      successCb(json);
    }
  })
  .catch(err => {
    if (typeof errorCb === 'function') {
      errorCb(err);
    }
  });
}
