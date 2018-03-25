import React from 'react';

//avatar_url name followers following
const UserBadge = ({user}) => {
  return (
    <section className='user-badge'>
      <img className='user-badge__img' src={user.avatar_url} />
      <div className='user-badge__info'>
        <h2>{user.name}</h2>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    </section>
  );
}

export default UserBadge;
