import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaded, fetchPizzas } from './redux/actions/pizzas';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';
import Basket from './Components/Basket/Basket';



const App = () => {

  const dispatch = useDispatch();
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>


      </Router>
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
