import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Main from './components/Main'
import List from './components/List'

class App extends Component {

  state={
    pokemons:[],
    selectedPokemonUrl: null,
    selectedPokemonData: null
  }

  async componentDidMount(){//try catch는 왜 쓰는가?
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    }catch(error){
      console.log(error);
    }
  }

  render() {
    return (
      <Wrapper>{/*얘는 스타일컴포넌트 */}
        <Globalstyle/>{/*얘도 마찬가지. 전역스타일 컴포넌트 */}
        <Main/>
        <List/>
      </Wrapper>
    );
  }
}

//여기서도 createGlobalStyle이 어디서 나온 이름인지..
const Globalstyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }

  html, body{
    margin: 0px;
    padding: 0px;
    font-family: "NanumSquare";
  }
`;
//근데 styled.div는 어떤 이름이고 어떻게 정해지는것?
const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: flex-start;
`;

export default App;
