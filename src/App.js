import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import About from './routes/About';

function App(){
 return (
   <HashRouter>
     <Route path="/" exact={true} component={Home} />
     <Route path="/about" component={About} />
   </HashRouter>
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