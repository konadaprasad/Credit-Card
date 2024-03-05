import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
`
export const Cont1 = styled.div`
  background-color: #3b4b69;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const Cont2 = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
`
export const Heading2 = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
`
export const Heading1 = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #344e7a;
  font-weight: bold;
  align-self: flex-start;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45vh;
  width: 90%;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  margin: 20px;
  border-radius: 20px;
`
export const Para = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto';
`
export const InnerCont = styled.div`
  height: 40vh;
  box-shadow: 0px 0px 16px 1px #bfbfbf;
  padding: 30px;
  border: none;
  background-color: transparent;
`
export const Input = styled.input`
  height: 40px;
  width: 90%;
  border: solid 1px #c3cad9;
  background-color: transparent;
  margin-top: 30px;
  padding-left: 10px;
`
export const Line = styled.hr`
  width: 50%;
  background-color: #ffd773;
  border-width: 5px;
  margin-bottom: 50px;
`
