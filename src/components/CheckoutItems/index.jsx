import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, TableBox, Header, Body, Footer } from './styles';

function CheckoutItems({ tableHead, cartItems }) {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalValue = cartItems.reduce((acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity;
    }, 0);

    setTotal(totalValue);
  }, [cartItems]);

  const handleRemove = (id) => {
    dispatch({ type: 'CLEAR_ITEM_FROM_CART', payload: id });
  };

  return (
    <Container>
      <TableBox>
        <Header>
          <tr>
            {tableHead.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </Header>
        <Body>
          {cartItems.map(({ id, imageUrl, name, quantity, price }) => {
            return (
              <tr key={id}>
                <td>
                  <img src={imageUrl} alt={name} />
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td onClick={() => handleRemove(id)}>
                  <span>&#10005;</span>
                  {/* <span>&#10060;</span> */}
                </td>
              </tr>
            );
          })}
        </Body>
        <Footer>
          <tr>
            <td>TOTAL: &nbsp; $ {total}</td>
          </tr>
        </Footer>
      </TableBox>
    </Container>
  );
}

export default CheckoutItems;
