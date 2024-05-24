import React from 'react';
import UserListItem from '../UserListItem/UserListItem';

const UserList = (props) => {
  // return문 안에는 forEach를 작성하면 에러가 납니다. 무조건 map을 이용해주세요.
  return (
    <ul className="UserList">
      {props.users.map((user, index) => (
        //반복문을 이용해서 컴포넌트를 여러번 사용할 땐 key가 필요합니다.
        <UserListItem user={user} key={index}></UserListItem>
      ))}
    </ul>
  );
};

export default UserList;
