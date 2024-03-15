
import React from "react";
import Rating from "./Rating";

function ProductItem({product}) {

    if (!product) {
        return <div>Loading...</div>;
      }
    
    
    return(
       <>
       
          <tr>
             <td>{product?.id}</td>
              <td>{product?.title}</td>
              <td>{product?.price}</td>
              <td>{product?.description.slice(0,255)}</td>
              <td>{product?.categorie}</td>
              <td> <img  width={150}  src={product?.image} alt={product?.title}/></td>
              <td><Rating  count={product.rating.count} rate={product.rating.rate}/></td>
           
          </tr>
         
       </>
    )
}
export default ProductItem;