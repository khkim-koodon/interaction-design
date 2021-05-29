import styled from 'styled-components';
import H616px700 from '../../../foundation/typography/h6-16px-700';
import P314px400 from '../../../foundation/typography/p3-14px-400';

const ProductBox = () => {
  return (
    <>
      <ProductBoxContainer>
        <img className="product__img" src="/images/review.jpg" />
        <ProductName>
          <H616px700 color="black">브랜드명</H616px700>
          <P314px400 color="gray4">상품 이름이 들어갑니다</P314px400>
        </ProductName>
      </ProductBoxContainer>
    </>
  );
};

export default ProductBox;

const ProductBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  margin: 64px 16px 0; // 48px + 16px

  .product__img {
    width: 48px;
    height: 48px;
    padding: 3px;
    border-radius: 2px;
    border: solid 1px ${({ theme }) => theme.gray1};
  }
`;

const ProductName = styled.div`
  margin-left: 16px;
  margin-bottom: 2px; // 시각 보정
`;
