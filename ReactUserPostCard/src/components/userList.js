import React from 'react';
import UserCard from './userCard';

const UserList = (props) => {

  return (
    <div className="row">
      {props.usersProp.map(user => <UserCard key={user.id} userProp={user}></UserCard>)}
    </div>
  );
}

export default UserList;
