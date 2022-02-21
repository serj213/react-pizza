
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});


export const setLoaded = (boolean) => {
    

    return {
        type: 'CHANGE_LOADED',
        payload: boolean
    }

};

