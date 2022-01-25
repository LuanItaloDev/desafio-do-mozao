import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 600px;
  height: 300px;
  margin: auto;

  div {
    display: flex;
    align-items: center;
    align-content: center;
  }

  h1 {
    color: #3b4252;
    font-family: Lato;
    font-size: 40px;
    font-style: italic;
    line-height: 50px;
    width: 500px;
    text-align: center;
    font-weight: 300;
  }

  input {
    background-color: #ffffff;
    border: 1px solid #3b4252;
    border-radius: 5px;
    width: 400px;
    height: 50px;
  }

  button {
    background-color: #47525e;
    border-radius: 5px;
    width: 118px;
    height: 50px;

    color: #eceff4;
    font-family: Lato;
    font-size: 22px;
    font-style: italic;
    width: 118px;
    text-align: center;
    font-weight: 300;
  }
`

export default SearchContainer
