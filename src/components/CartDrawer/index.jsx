import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerToggle } from "../../store/CartDrawer";
import { message } from "antd";
import { Button } from "../Generics/Button";
import { Container, Footer, Product, Products, Wrapper } from "./style";
import {
  decrementQuantity,
  deleteItemFromCart,
  incrementQuantity,
} from "../../store/data";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const cartItems = store?.data?.cartItems;
  const navigate = useNavigate();

  const onClose = () => {
    dispatch(cartDrawerToggle());
  };

  const error = (title) => {
    message.error(`${title} has been deleted from Cart`);
  };

  return (
    <Container
      title="Products"
      width={window.matchMedia("(max-width: 500px)").matches ? "100%" : 500}
      placement="right"
      onClose={onClose}
      open={store.cartDrawerSlice.cartDrawer}
    >
      <Wrapper>
        <Products>
          {cartItems.length > 0 ? (
            cartItems?.map((cartItem, index) => (
              <Product key={cartItem?.id | index}>
                <Product.ImageWrapper>
                  <Product.ImageWrapper.Image
                    src={cartItem?.featuredImage}
                    alt={cartItem?.title}
                  />
                </Product.ImageWrapper>
                <Product.Content>
                  <Product.Content.Title>
                    {cartItem?.title}
                  </Product.Content.Title>
                  <Product.Content.Sku>SKU: 1995751877966</Product.Content.Sku>
                  <Product.Content.Price>
                    ${cartItem?.price}.00
                  </Product.Content.Price>
                </Product.Content>
                <Product.Counter>
                  <Product.Counter.Wrapper
                    onClick={() => dispatch(decrementQuantity(cartItem))}
                  >
                    <Product.Counter.Decrement />
                  </Product.Counter.Wrapper>
                  <Product.Counter.Text>
                    {cartItem?.quantity}
                  </Product.Counter.Text>
                  <Product.Counter.Wrapper
                    onClick={() => dispatch(incrementQuantity(cartItem))}
                  >
                    <Product.Counter.Increment />
                  </Product.Counter.Wrapper>
                </Product.Counter>
                <Product.Icon
                  onClick={() => dispatch(deleteItemFromCart(cartItem))}
                >
                  <Product.Trash onClick={() => error(cartItem.title)} />
                </Product.Icon>
              </Product>
            ))
          ) : (
            <Wrapper.NoData>No Products yet</Wrapper.NoData>
          )}
        </Products>
        <Footer>
          <Footer.Title>Cart Totals</Footer.Title>
          <Footer.Wrapper>
            <Footer.Total>Total:</Footer.Total>
            <Footer.TotalPrice>
              $
              {cartItems?.reduce(
                (sum, current) => sum + current?.quantity * current?.price,
                0
              )}
              .00
            </Footer.TotalPrice>
          </Footer.Wrapper>
          <Footer.Buttons>
            <Button
              height="40px"
              onClick={() => {
                dispatch(cartDrawerToggle());
                navigate("/checkout");
              }}
            >
              Proceed To Checkout
            </Button>
            <Button
              height="40px"
              onClick={() => {
                dispatch(cartDrawerToggle());
                navigate("/shop");
              }}
            >
              Continue Shopping
            </Button>
          </Footer.Buttons>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default CartDrawer;
