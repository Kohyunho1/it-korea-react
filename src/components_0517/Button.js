import React from 'react';

//버튼 컴포넌트 만들기
const Button = (props) => {
    return <button style={props.style}>{ props.text}</button>;
};

export default Button;
