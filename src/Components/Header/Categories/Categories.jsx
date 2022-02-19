import React from "react";

const Categories = () => {

    const categoriaName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [activeCategoria, setActiveCategoria] = React.useState(null);

    const changeActive = index => {

        setActiveCategoria(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={`${activeCategoria === null ? 'active' : ''}`}
                    onClick={() => setActiveCategoria(null)}>Все</li>
                {
                    categoriaName && categoriaName.map((name, index) => {
                        return <li className={`${activeCategoria === index ? 'active' : ''}`} onClick={() => changeActive(index)} key={`${name} + _${index}`} >{name}</li>
                    })
                }
            </ul>
        </div>
    )

}


export default Categories;

