import React from 'react';

import Categories from '../Header/Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaItem from '../PizzaItem/PizzaItem';

const Home = ({items}) => {

    return (
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
                        items.map((item, index) => {
                            return <PizzaItem key={index} {...item} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home;