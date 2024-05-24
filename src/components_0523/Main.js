import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import UserList from './UserList/UserList';
import './Main.css';

const Main = () => {
  const USER = [
    { name: 'King', sal: 9000, job: 'CEO', hiredate: '2024-01-02' },
    { name: 'Lee', sal: 2800, job: 'SALES', hiredate: '2024-05-02' },
    { name: 'Jones', sal: 4600, job: 'CTO', hiredate: '2024-04-01' },
    { name: 'Smith', sal: 3500, job: 'CLERK', hiredate: '2024-04-15' },
    { name: 'James', sal: 2800, job: 'SALES', hiredate: '2024-05-02' },
    { name: 'Ray', sal: 3500, job: 'CLERK', hiredate: '2024-04-15' },
  ];
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      {/* Main 컴포넌트에서 UserList로 USER라는 값 전달*/}
      <UserList users={USER}></UserList>
    </div>
  );
};

export default Main;
