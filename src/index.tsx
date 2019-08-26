import * as React from "react";
import { render } from "react-dom";
import IconType from "./card.icons";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Stripe Card Number with flags</h1>
      <IconType cardNumber="4242424242424242" />
      <IconType cardNumber="2255555555554444" />
      <IconType cardNumber="378282246310005" />
      <IconType cardNumber="6200828282828210" />
      <IconType cardNumber="6011111111111117" />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
