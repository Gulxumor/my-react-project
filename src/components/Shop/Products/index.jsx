import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../utils/products";
import { Card } from "../../Generics/Card";
import {
  Container,
  Description,
  Products as ProductsWrapper,
  Title,
  Wrapper,
} from "./style";

export const Products = () => {
  const [page, setPage] = useState(products.slice(0, 3));
  const navigate = useNavigate();

  const paginationHandler = (e, p) => {
    switch (p) {
      case 1: {
        setPage(products.slice(0, 8));
        return;
      }
      case 2: {
        setPage(products.slice(8, 16));
        return;
      }
      case 3: {
        setPage(products.slice(16, 24));
        return;
      }
      case 4: {
        setPage(products.slice(24, 32));
        return;
      }
      case 5: {
        setPage(products.slice(32, 40));
        return;
      }
      case 6: {
        setPage(products.slice(40, 48));
        return;
      }
      case 7: {
        setPage(products.slice(48));
        return;
      }
      default:
        setPage(products.slice(0, 8));
        return;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Our Products</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <ProductsWrapper>
          {page?.map((product) => (
            <Card
              onClick={() => navigate(`/shop/:${product.id}`)}
              key={product?.id}
              product={product}
            />
          ))}
        </ProductsWrapper>
        <Stack spacing={3}>
          <Pagination
            count={
              Number.parseInt(products.length / 10) < products.length
                ? Number.parseInt(products.length / 10) + 1
                : Number.parseInt(products.length / 10)
            }
            variant="outlined"
            shape="rounded"
            onChange={paginationHandler}
          />
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default Products;
