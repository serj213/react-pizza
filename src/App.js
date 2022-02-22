import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzas, setLoaded } from './redux/actions/pizzas';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';



const App = props => {

  const dispatch = useDispatch();
  const state = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
      isLoaded: pizzas.isLoaded
    }
  })

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    }).finally(() => {
      dispatch(setLoaded(false));
    })
  }, [])

  return (
    <div className="wrapper">
      {
        state.isLoaded ? <Loader />
          :
          <>
            <Header />
            <Home items={state.items} />
          </>
      }

    </div>
  )
}



export default App;


// export default connect(
//   (state) => ({
//     items: state.pizzas.items,
//     isLoaded: state.pizzas.isLoaded
//   }),
//   (dispatch) => ({
//     setPizzasGet: (items) => dispatch(setPizzas(items)),
//     changeLoaded: (boolean) => dispatch(setLoaded(boolean))
//   })

// )(App);
