import Image from 'next/image'
import { AddToCartButton, ProductImage, ProductItem, ProductName, ProductOverlay, ProductPrice } from '../Product/ProductStyles';
import { iPadsData, iPhonesData } from './CarouselData';
import { CarouselItem, CarouselItems, CarouselTitle, CarouselWrapper, CarouseReallItem } from "./CarouselStyles";

const Carousel = ({carouselList, carouselTitle}) => {
  return ( 
    <CarouselWrapper>
      <CarouselTitle>{carouselTitle}</CarouselTitle>
      <CarouselItems>
        {carouselList.map((product) => (
        <CarouselItem key={product.productName} >
          <CarouseReallItem>
          <ProductItem>
            <ProductOverlay/>
            <ProductImage>
              <Image src={product.productImageUrl} alt={product.productName} width={470} height={556} />
            </ProductImage>
            <ProductName>{product.productName}</ProductName>
            <ProductPrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.productPrice)}</ProductPrice>
            <AddToCartButton>Adicionar</AddToCartButton>
          </ProductItem>
          </CarouseReallItem>
        </CarouselItem>
        ))}
      </CarouselItems>
    </CarouselWrapper>
   );
}
 
export default Carousel;