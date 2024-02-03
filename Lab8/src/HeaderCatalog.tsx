import React from 'react';
import Catalog from './Catalog';

import IProduct from './module';

interface ProductsProps {
	mas : IProduct[]
}

function Header({mas} : ProductsProps) {
    let temp = '';

	return (
        <>
            {mas.map(item=>{
                if (item.category !== temp) {
                    
                    temp = item.category;
                    return (
                        <>
                            <tr><th>{item.category}</th></tr>
                            <Catalog product={item}/>
                        </>
                    )
                }
                return <Catalog product={item}/>
            })}
        </>
    );
}

export default Header;