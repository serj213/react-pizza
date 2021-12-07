import React, { useRef } from 'react';

const Sort = ({ items }) => {

    const [activeSort, setActiveSort] = React.useState(false);
    const sortRef = useRef()
    const [activeItem, setActiveItem] = React.useState(0);

    const toggleActiveSort = () => {
        setActiveSort(!activeSort);
        // console.log('fgfg');
    }

    const changeActiveItem = index => {
        setActiveItem(index);
        setActiveSort(false);
        
    }

    const outsideClickPopup = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setActiveSort(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', outsideClickPopup);
    }, [])

    return (
        <div ref={sortRef} onClick={toggleActiveSort} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{items[activeItem]}</span>
            </div>

            {
                activeSort && <div className="sort__popup">
                    <ul>
                        {
                            items.map((item, index) => {
                                return <li key={index} className={`${activeItem === index && 'active'}`} onClick={() => changeActiveItem(index)} >{item}</li>
                            })
                        }
                    </ul>
                </div>
            }


        </div>
    )

}

export default Sort;