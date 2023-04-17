import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Generics/Button";
import { Input } from "../Generics/Input";
import { Container, Shipping, Subtotal, Wrapper } from "./style";

export const Checkout = () => {
  const store = useSelector((state) => state);
  const subtotal = store?.data?.cartItems?.reduce(
    (sum, current) => sum + current?.price,
    0
  );
  const shipping = 30;

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <Container>
      <Wrapper>
        <Shipping>
          <Shipping.Title>Shipping Address</Shipping.Title>
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="number" placeholder="Phone number" />
          <Input type="text" placeholder="Country" />
          <Input type="text" placeholder="City" />
          <Input type="number" placeholder="Postal code" />
          <Button width="150px">Payment</Button>
        </Shipping>
        <Subtotal>
          <Subtotal.Wrapper>
            <Subtotal.Title>Subtotal:</Subtotal.Title>
            <Subtotal.Title>{formatter.format(subtotal)}</Subtotal.Title>
          </Subtotal.Wrapper>
          <Subtotal.Wrapper>
            <Subtotal.Title>Shipping:</Subtotal.Title>
            <Subtotal.Title>{formatter.format(shipping)}</Subtotal.Title>
          </Subtotal.Wrapper>
          <Subtotal.Wrapper total>
            <Subtotal.Title>Total:</Subtotal.Title>
            <Subtotal.Title>
              {formatter.format(subtotal + shipping)}
            </Subtotal.Title>
          </Subtotal.Wrapper>
        </Subtotal>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
