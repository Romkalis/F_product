import React from "react";
import {StyledCard, Image, CardList, ProductsEmpty, Alert} from './styles'
import Title from "../title/title";
import Tabs from '../../blocks/tabs/tabs'



function ProductCard({products}) {

    if(products && products.length) {

   const productCards = products.map((product) => (

      <StyledCard key={product.id}> 
        <div className="productImageContainer">
          <Image className="productImage" src={product.src} alt={product.name}></Image>
        </div>
        <div className="productDescription">
          <Title>{product.name}</Title>

          <Tabs  product={product}/> 
        </div>
        
      </StyledCard>
   ))

return (
  <CardList>
    {productCards}
  </CardList>
)
    } else {
      return (
        <>
        
        <ProductsEmpty>
          <Alert>Продукты были слишком вкусные и их очень быстро разобрали.</Alert>
        </ProductsEmpty>
        </>
      )
    }
}

export default ProductCard;
