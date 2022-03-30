import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CardProvider";
import { useState } from 'react'

function App() {

  const [isCardShown, setIsCardShown] = useState(false)

  const manageCardHandler = () => {
    setIsCardShown(!isCardShown)
  }

  return (
    <CardProvider>
      {isCardShown ? <Cart closeCart={manageCardHandler} /> : null}
      <Header showCard={manageCardHandler} />
      <Meals />
    </CardProvider>
  )
}

export default App;
