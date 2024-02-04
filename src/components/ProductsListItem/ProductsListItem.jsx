import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IoBag } from "react-icons/io5";
import styled from "styled-components";
import { addItemActionCreator } from "../../store/actions/cart.actions";
import { useAuth } from "../../contexts/auth.context";

function ProductsListItem({ product }) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleClickAddToCartButton = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      dispatch(addItemActionCreator(product)); // dispatch로 action을 발생시킨다. (해당상품 카트에 추가.)
      alert(`${product.goodsnm} 상품 1개를 담았습니다.`);
    } else {
      alert("로그인 하셔야 댐니다!!!!!");
      navigate("/sign-in");
    }
  };

  return (
    <li key={product.goodsno}>
      <ProductsListItemLink to={`/products/${product.goodsno}`}>
        <img src={product.img_i} alt={product.goodsnm} />
        <div>
          <h3>{product.brandnm}</h3>
          <button onClick={handleClickAddToCartButton}>
            <IoBag />
          </button>
        </div>
        <GoodsName>{product.goodsnm}</GoodsName>
        <p>
          {product.price} <span>{product.sale_percent}</span>
        </p>
      </ProductsListItemLink>
    </li>
  );
}

export default ProductsListItem;

const ProductsListItemLink = styled(Link)`
  display: block;
  color: black;
  img {
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    font-size: 20px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid transparent;
    &:hover {
      color: rgb(130, 130, 130);
      cursor: pointer;
    }
  }
`;

const GoodsName = styled.p`
  width: 100%;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
