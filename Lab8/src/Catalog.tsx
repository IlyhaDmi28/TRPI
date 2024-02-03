import React from 'react';
import IProduct from './module';

interface ProductProps {
	product : IProduct
}

function Catalog({product} : ProductProps) {
  return (
    <>
	    <tr>
		    {!product.stocked ? <td style={{color: 'red'}}>{product.name}</td>: <td>{product.name}</td>}
		    <td>{product.price}</td>
	    </tr>
    </>
  );
}

export default Catalog;
