import * as React from "react";

const Icons = (name = "") => {
  const list = {
    visa: "https://img.icons8.com/color/48/000000/visa.png",
    americanExpress: "https://img.icons8.com/color/48/000000/amex.png",
    master:
      "https://img.icons8.com/officel/48/000000/mastercard-credit-card.png",
    discover: "https://img.icons8.com/officel/48/000000/discover.png",
    diners: "https://img.icons8.com/color/48/000000/diners-club.png",
    jcb: "https://img.icons8.com/officel/48/000000/jcb.png",
    unipay: "https://img.icons8.com/color/48/000000/visa.png"
  };
  const type = list[name];
  return {
    Img: () => <img title={name} alt={name} src={type} />,
    card: list[name]
  };
};

interface CardNumber {
  cardNumber: string;
}

const CardType: React.SFC<CardNumber> = ({ cardNumber }) => {
  const master =
    "((?=55)(^55)[0-9]{2,16}|(?=22)(^22)[0-9]{2,16}|(?=52)(^52)[0-9]{2,16}|(?=51)(^52)[0-9]{2,16})";
  const visa = "((?=4)(^4)[0-9]{2,16}|(?=42)(^42)[0-9]{2,16})";
  const americanExpress = "((?=37)(^37)[0-9]{2,15}|(?=34)(^34)[0-9]{2,15})";
  const discover = "(?=60)(^60)[0-9]{2,16}";
  const diners =
    "((?=30)(^30)[0-9]{2,14}|(?=38)(^38)[0-9]{2,14}|(?=36)(^36)[0-9]{2,14})";
  const jcb = "(?=35)(^35)[0-9]{2,16}";
  const unipay = "(?=62)(^62)[0-9]{2,16}";
  const regx = {
    master,
    visa,
    americanExpress,
    discover,
    diners,
    jcb,
    unipay
  };
  const _cardType = Object.entries(regx).filter((item, val) => {
    return String(cardNumber).match(item[1]) ? true : false;
  });

  const { Img } = Icons(_cardType[0][0]);

  return (
    <>
      <Img />
    </>
  );
};

export default CardType;
