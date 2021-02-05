import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount(){
    // 영화 데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'we are ready'}</div>;
  }
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