import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas, setLoaded } from './redux/actions/pizzas';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';



class App extends React.Component {


  componentDidMount() {

    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      this.props.setPizzasGet(data)
    }).finally(() => {
      this.props.changeLoaded(false);
      console.log('dfdf');
    })
  }

  render() {

    console.log('this.props.isLoaded', this.props.isLoaded);

    return (
      <>
        <div className="wrapper">

          {
            this.props.isLoaded ? <Loader />
              :
              <>
                <Header />
                <Home items={this.props.items} />
              </>
          }



        </div>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    isLoaded: state.pizzas.isLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzasGet: (items) => dispatch(setPizzas(items)),
    changeLoaded: (boolean) => dispatch(setLoaded(boolean))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
