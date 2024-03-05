import {useState} from 'react'

import {
  MainContainer,
  InnerCont,
  Cont1,
  Cont2,
  Input,
  Heading,
  Line,
  Heading1,
  Para,
  Card,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, changeCardNum] = useState('')
  const [cardName, changeCardName] = useState('')

  const Name = cardName.toUpperCase()
  const Num = cardNum.toUpperCase()

  const changeNumber = event => {
    changeCardNum(event.target.value)
  }

  const changeName = event => {
    changeCardName(event.target.value)
  }

  return (
    <MainContainer>
      <Cont1>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <Card data-testid="creditCard">
          <Heading2>{Num}</Heading2>
          <Para>CARDHOLDER NAME</Para>
          <Heading2>{Name}</Heading2>
        </Card>
      </Cont1>
      <Cont2>
        <InnerCont>
          <Heading1>Payment Method</Heading1>
          <Input
            placeholder="Card Number"
            type="text"
            onChange={changeNumber}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            onChange={changeName}
          />
        </InnerCont>
      </Cont2>
    </MainContainer>
  )
}

export default CreditCard
