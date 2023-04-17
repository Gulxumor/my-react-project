import { Rating } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCar, likedProduct } from "../../store/data.js";
import { Button } from "../Generics/Button";
import {
  Container,
  CounterWrapper,
  Icons,
  ProductInfo,
  Select,
  Wrapper,
} from "./style";

export const ProductItem = () => {
  const param = useParams();
  const store = useSelector((state) => state);
  const product = store?.data?.products?.filter(
    (value) => +value.id === +param.id.replace(":", "")
  )[0];
  const [image, getImage] = useState(product?.images[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setImage = (img) => {
    getImage(img);
  };

  return (
    <Container>
      <Wrapper>
        <ProductInfo>
          <ProductInfo.Left>
            <img src={image} width="100%" alt={product?.title} />
            <ProductInfo.Left.SmallImages>
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product?.title + "thumbnail"}
                  onClick={() => setImage(image)}
                />
              ))}
            </ProductInfo.Left.SmallImages>
          </ProductInfo.Left>
          <ProductInfo.Right>
            {/* <ProductInfo.Right.Url>{window.location.pathname}</ProductInfo.Right.Url> */}
            <ProductInfo.Right.Category>
              <span onClick={() => navigate("/home")}>Home</span> /{" "}
              {product?.category}
            </ProductInfo.Right.Category>
            <ProductInfo.Right.Title>{product?.title}</ProductInfo.Right.Title>
            <ProductInfo.Right.Price>
              ${product?.price}.00
            </ProductInfo.Right.Price>
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={product?.rating[0]}
                precision={product?.rating[1]}
              />
            </Stack>
            <ProductInfo.Right.Wrapper>
              <Select defaultValue="Select Size">
                <option value="select"> Select Size</option>
                {product?.sizes?.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </Select>
              <Select defaultValue="Select Size">
                <option value="select"> Select Color</option>
                {product?.colors?.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </Select>
            </ProductInfo.Right.Wrapper>
            {/* <CounterWrapper>
              <Button>-</Button>
              <span>{product?.quantity}</span>
              <Button>+</Button>
            </CounterWrapper> */}
            <CounterWrapper icons>
              <Button
                width={"200px"}
                type="secondary"
                onClick={() => {
                  dispatch(addToCar(product));
                  localStorage.setItem("data", JSON.stringify(store?.data));
                }}
              >
                Add to Cart
              </Button>
              <Icons>
                {product?.liked ? (
                  <Icons.HeartRed
                    onClick={() => {
                      dispatch(likedProduct(product));
                      localStorage.setItem("data", JSON.stringify(store?.data));
                    }}
                  />
                ) : (
                  <Icons.Heart
                    onClick={() => {
                      dispatch(likedProduct(product));
                      localStorage.setItem("data", JSON.stringify(store?.data));
                    }}
                  />
                )}
              </Icons>
            </CounterWrapper>
            <ProductInfo.Right.Subtitle>
              Product Details
            </ProductInfo.Right.Subtitle>
            <ProductInfo.Right.Description>
              {product?.description}
            </ProductInfo.Right.Description>
          </ProductInfo.Right>
        </ProductInfo>
      </Wrapper>
    </Container>
  );
};

export default ProductItem;
