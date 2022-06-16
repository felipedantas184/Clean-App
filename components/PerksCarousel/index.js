import Image from 'next/image'
import PerksCard from '../PerksCard';
import Product from '../Product';
import { AddToCartButton, ProductImage, ProductItem, ProductName, ProductOverlay, ProductPrice } from '../Product/ProductStyles';
import { iPadsData, iPhonesData } from './PerksCarouselData';
import { CarouselItem, CarouselItems, CarouselTitle, CarouselWrapper, CarouseReallItem } from "./PerksCarouselStyles";

const PerksCarousel = ({carouselList, carouselTitle}) => {
  return ( 
    <CarouselWrapper>
      <CarouselTitle>{carouselTitle}</CarouselTitle>
      <CarouselItems>
        {carouselList.map((perk) => (
        <CarouselItem key={perk.name} >
          <CarouseReallItem>
            <PerksCard perk={perk} />
          </CarouseReallItem>
        </CarouselItem>
        ))}
      </CarouselItems>
    </CarouselWrapper>
   );
}
 
export default PerksCarousel;