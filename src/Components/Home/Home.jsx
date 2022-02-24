import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Categories from './Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaItem from '../PizzaItem/PizzaItem';
import { actionCategory } from '../../redux/actions/filters';

const categoriaName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

const Home = () => {

    const items = useSelector(({ pizzas }) => pizzas.items);
    const dispatch = useDispatch();

    const changeCategories = React.useCallback(index => {
        dispatch(actionCategory(index))
    }, []);


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">

                    <Categories
                        onClickCategory={changeCategories}
                        categoriaName={categoriaName}
                    />

                    <Sort items={sortItems} />
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