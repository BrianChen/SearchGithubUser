import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchForm from './components/search-form';
import Header from './components/header';
import UserBadge from './components/user-badge';
import RepoList from './components/repo-list';
import { fetchGithubUser } from './helpers/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      repos: [],
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  onSubmit(username) {
    fetchGithubUser(username, this.updateUser, this.handleError);
  }

  updateUser(data) {
    const user = data.user;
    const repos = data.repos;

    this.setState({
      user: user,
      repos: repos,
    });
  }

  handleError() {
    this.setState({
      user: null,
      repos: [],
    });
  }

  createUserBadge() {
    if (this.state.user) {
      return <UserBadge user={this.state.user} />;
    }
  }

  createRepoList() {
    if (this.state.repos.length > 0) {
      return <RepoList repos={this.state.repos}/>
    }
  }

  render() {
    const userBadge = this.createUserBadge();
    const repoList = this.createRepoList();

    return (
      <div className='app'>
        <Header />
        <SearchForm onSubmit={this.onSubmit} />
        <div className='content'>
          {userBadge}
          {repoList}
        </div>
      </div>
    );
  }
}

export default App;
