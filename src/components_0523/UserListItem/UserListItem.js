import React from 'react';

const UserListItem = (props) => {
  //문제) 봉급(sal)이 3500넘는 user의 이름은 빨강색으로 표현하시오.
  console.log('props를 출력해보자.');
  console.log(props);
  console.log('직업 : ' + props.user.job);
  console.log('봉급 : ' + props.user.sal);
  return (
    //리액트에서 데이터를 출력할 땐 {}
    <li className="UserListItem" style={props.user.sal >= 3500 ? { color: 'red' } : { color: 'white' }}>
      {props.user.name}
    </li>
  );
};

export default UserListItem;
