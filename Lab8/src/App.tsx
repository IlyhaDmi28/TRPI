import React, { useState } from 'react';
import Form from './Form';
import Header from './HeaderCatalog';


import Products from './state';

function App() {
  let [mas, changeMas] = useState(Products.sort((a, b) => a.category > b.category ? 1 : -1));

  function showStock(check : boolean) : void {
    if (check) {
      let temp = [...mas];
      for (let i = 0; i < temp.length; i++) {
        if (!temp[i].stocked)
          delete temp[i];
      }
      changeMas(temp);
    }
    else changeMas(Products);
  }

  function search(value : string) : void {
      let temp = Products.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()))
      changeMas(temp);
  }

  return (
    <>
		<Form showStock={showStock} search={search}/>
    <table>
      <tr>
		    <th>Name</th>
		    <th>Price</th>
      </tr>
      <Header mas={mas} />
    </table>
    </>
  );
}

export default App;
