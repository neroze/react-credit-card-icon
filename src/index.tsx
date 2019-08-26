import * as React from "react";
import { render } from "react-dom";
import CardType from "./card.icons";

import "./styles.css";

let icons = {
  visa: "https://img.icons8.com/color/48/000000/visa.png",
  americanExpress: "https://img.icons8.com/color/48/000000/amex.png",
  master: "https://img.icons8.com/officel/48/000000/mastercard-credit-card.png",
  discover: "https://img.icons8.com/officel/48/000000/discover.png",
  diners: "https://img.icons8.com/color/48/000000/diners-club.png",
  jcb: "https://img.icons8.com/officel/48/000000/jcb.png",
  unipay: "https://img.icons8.com/color/48/000000/visa.png"
};

function App() {
  return (
    <div className="App">
      <h1>Cards</h1>
      <CardType cardNumber="4242424242424242" icons={icons} />
      <CardType cardNumber="2255555555554444" icons={icons} />
      <CardType cardNumber="378282246310005" icons={icons} />
      <CardType cardNumber="6200828282828210" icons={icons} />
      <CardType cardNumber="6011111111111117" />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
