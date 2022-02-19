import React from 'react';
import axios from 'axios';

import Header from './Components/Header/Header';
import Categories from './Components/Header/Categories/Categories';
import Sort from './Components/Sort/Sort';
import { PizzaItem } from './Components/index';

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      setPizzas(data);
    })

  }, [])



  return (
    <>
      <div className="wrapper">

        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">

              <Categories />

              <Sort items={[
                { name: 'популярности', type: 'popular' },
                { name: 'цене', type: 'price' },
                { name: 'алфавиту', type: 'alphabet' }
              ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

              {
                pizzas.map((item, index) => {
                  return <PizzaItem key={index} {...item} />
                })
              }

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
