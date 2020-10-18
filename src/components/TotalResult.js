import React from 'react';
import { Well } from 'react-bootstrap';

const stringMapping = {
  hunreds: "100 dollar bill",
  fifties: "50 dollar bill",
  twenties: "20 dollar bill",
  tens: "10 dollar bill",
  fives: "5 dollar bill",
  ones: "1 dollar bill",
  quarters: "quarter",
  dimes: "dime",
  nickels: "nickel",
  pennies: "pennie",
}

const pluralFunc = (currency, value) => value > 1 ? `${currency}s` : currency;

const TotalResult = ({amount}) => {
  const amountArr = Object.keys(amount).map(key => [key, amount[key]]).filter(item => item[1] > 0)
  const amountString = amountArr.map((value, i) => ` ${value[1]} ${pluralFunc(stringMapping[value[0]], value[1])}`).join().replace(/, ([^,]*)$/, ' and $1')

  return (
    <div>
      {
        amountArr.length > 0 ?
          <Well bsSize="small">
            {`Your change is${amountString}`}
          </Well> :
          null
      }
    </div>
  );
};

export default TotalResult;