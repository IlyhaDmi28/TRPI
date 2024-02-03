import React, { useState } from 'react';
import F from './form.module.css';

interface showProps {
    showStock(check : boolean) : void
    search(value : string) : void
}

function Product({showStock, search} : showProps) {

	return (
        <form className={F.form}>
            <input type="text" placeholder="Search..." onChange={event =>{search(event.target.value)}}/>
            <input type="checkbox" onChange={event =>showStock(event.target.checked)}/>
            <span>Only show products in stock</span>
        </form>
    );
}

export default Product;