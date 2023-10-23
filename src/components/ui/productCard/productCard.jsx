import React from "react";
import {StyledCard, Image, CardList, CardDescription} from './styles'
import Title from "../title/title";
import Tabs from '../../blocks/tabs/tabs'



function ProductCard({products}) {

  

   const productCards = products.map((product) => (
    

      <StyledCard key={product.id}> 
        <div className="productImageContainer">
          <Image className="productImage" src={product.src} alt={product.name}></Image>
        </div>
        <div className="productDescription">
          <Title>{product.name}</Title>
          
          <Tabs  products={products}/> 
        </div>
        
      </StyledCard>
   ))

return (
  <CardList>
    {productCards}
  </CardList>
)
}

export default ProductCard;
