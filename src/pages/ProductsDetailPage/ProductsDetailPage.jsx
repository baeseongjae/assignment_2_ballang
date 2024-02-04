import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoBag } from "react-icons/io5";

import api from "../../apis/api";
import Page from "../../components/Page";
import Loading from "../../components/Loading";
import Price from "../../components/Price";

import styled from "styled-components";

function ProductsDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.products
      .getProduct(productId)
      .then((promise) => {
        setProduct(promise);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("상품 데이터를 불러오는데 에러가 발생했습니다.", error);
        setIsLoading(false);
      });
  }, [productId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Page>
      <A11yHidden>상품 상세페이지</A11yHidden>
      <ProductInfoWrapper>
        <ProductImageWrapper>
          <img src={product.img_i} alt={product.goodsnm} />
        </ProductImageWrapper>
        <ProductTextWrapper>
          <form action="">
            <header>
              <h3>{product.brandnm}</h3>
              <p>
                [{product.brandnm}] {product.goodsnm}
              </p>
            </header>
            <Line />
            <ul>
              <li>
                <DescriptionList>
                  <dt>상품금액</dt>
                  <OriginalPrice>
                    <Price amount={product.standard_price} />
                  </OriginalPrice>
                </DescriptionList>
                <DescriptionList>
                  <dt>판매가</dt>
                  <dd>
                    <Price amount={product.price} />
                  </dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>할인율</dt>
                  <dd>{product.sale_percent}%</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>적립금</dt>
                  <dd>
                    <Price amount={`${product.price / 10}`} />
                  </dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>무이자할부</dt>
                  <dd>안돼.</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>배송비</dt>
                  <dd>무료로 하자.</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>도착예정</dt>
                  <dd>내일</dd>
                </DescriptionList>
              </li>
            </ul>
            <Line />
            <OptionAndBuyWrapper>
              <OptionSize>
                <span>옵션 선택</span>
                <button>Size chart</button>
              </OptionSize>
              <OptionSelect>
                <select name="" id="">
                  {product.option.map((option) => (
                    <option value={option.size}>
                      {option.size} ({product.totstock}개 남음)
                    </option>
                  ))}
                </select>
              </OptionSelect>
              <ButtonWrapper>
                <button>Buy Now</button>
                <button>
                  <IoBag />
                </button>
              </ButtonWrapper>
            </OptionAndBuyWrapper>
          </form>
        </ProductTextWrapper>
      </ProductInfoWrapper>
      <ProductDetailBottom>
        <h2>상세 정보</h2>
        <Line />
        <ul>
          <li>
            <DescriptionList>
              <dt>브랜드</dt>
              <dd>{product.brandnm}</dd>
            </DescriptionList>
            <DescriptionList>
              <dt>상품명 / 모델명</dt>
              <dd>{product.goodsnm}</dd>
            </DescriptionList>
            <DescriptionList>
              <dt>발랑 코드</dt>
              <dd>{product.goodsno}</dd>
            </DescriptionList>
          </li>
        </ul>
      </ProductDetailBottom>
    </Page>
  );
}

export default ProductsDetailPage;

// ---------------- 스타일링 ---------------------

const A11yHidden = styled.h2`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;

const ProductInfoWrapper = styled.article`
  margin: 5rem 0;
  display: flex;
  column-gap: 6rem;
  height: 756px;
`;

const ProductImageWrapper = styled.section`
  img {
    height: 100%;
  }
`;
const ProductTextWrapper = styled.section`
  width: 510px;

  h3 {
    font-size: 2rem;
  }
`;

const Line = styled.hr`
  border: 1px solid black;
`;

const DescriptionList = styled.dl`
  display: flex;
  padding: 7px 0;
  dt {
    width: 20%;
    font-weight: 600;
  }
`;

const OriginalPrice = styled.dd`
  text-decoration: line-through;
  color: rgb(137, 137, 137);
`;

// ------------- 옵션, 구매 -------------------
const OptionAndBuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const OptionSize = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4.5rem;
  padding-top: 12px;
  button {
    padding: 5px 10px;
    border: 2px solid rgb(130, 130, 130);
    border-radius: 5px;
    font-weight: 600;
  }
  button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const OptionSelect = styled.div`
  select {
    width: 228px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  button:first-child {
    width: 228px;
    height: 50px;
    background-color: black;
    border: none;
    border-radius: 25px;
    color: white;
  }

  button:last-child {
    font-size: 1.8rem;
    width: 50px;
    border-radius: 50%;
    border: 1px solid rgb(173, 173, 173);
  }

  button:hover {
    cursor: pointer;
    &:first-child {
      background-color: rgb(130, 130, 130);
    }
    &:last-child {
      color: rgb(130, 130, 130);
    }
  }
`;

// ----------- 상세 정보 -----------
const ProductDetailBottom = styled.section``;
