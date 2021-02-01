import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
  <div>
      <h1>Hello</h1>
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="samgiopsal" />
    <Food fav="chukumi" />
  </div>
  );
}

export default App;


/*
//구조 분해 할당
//객체에 있는 키값을 편하게 추출할 수 있게 해주는 자바스크립트 문법  

function Food(props){
  {fav}=props;
  return <h1>I like {fav}</h1>;
}

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

*/