import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (<div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div>
  );
}  

const foodLike =[
  {
    id:1,
    name: 'Kimchi',
    image:'https://i.pinimg.com/originals/9f/d0/38/9fd038a367a3d54640dce5fa87085c38.png',
    rating:5,
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image:'https://i.pinimg.com/originals/13/9b/68/139b683954c314c5195f1c4228d6dd72.jpg',
    rating:4.5,
  },
  {
    id:3,
    name: 'Doncasu',
    image:'https://i.pinimg.com/originals/fb/ef/4c/fbef4c995756d660685db9e0a55af39f.jpg',
    rating:5,
  },
  {
    id:4,
    name: 'Kimbap',
    image:'https://i.pinimg.com/originals/44/5c/fb/445cfb0b5452dbe97662e54a1aecf5e9.jpg',
    rating:4,
  },
];

function App() {
  return (
  <div>
      {foodLike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
  </div>
  );
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
};

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