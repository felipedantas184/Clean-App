import Image from 'next/image'
import Carousel from '../Carousel';
import { AddToCartButton, ProductContainer, ProductHeading, ProductImage, ProductItem, ProductList, ProductName, ProductOverlay, ProductPrice, ProductWrapper } from "./ProductStyles";

const Store = () => {
  return ( 
    <>
    <ProductContainer>
      <ProductWrapper>
        <ProductHeading>Loja Carcará</ProductHeading>
       {/**
        <ProductList>
          <ProductItem>
            <ProductOverlay/>
            <ProductImage>
              <Image src="/iphone-13-pro-max-silver-select.png" alt="" width={470} height={556} />
            </ProductImage>
            <ProductName>iPhone 13 Pro Max</ProductName>
            <ProductPrice>R$ 10.999,00</ProductPrice>
            <AddToCartButton>Adicionar</AddToCartButton>
          </ProductItem>
          <ProductItem>Product</ProductItem>
          <ProductItem>Product</ProductItem>
        </ProductList>
        */}
      </ProductWrapper>
    </ProductContainer>
     
    <Carousel/>
    </>
   );
}
 
export default Store;