import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import HomePage from './HomePage';
import { CartProvider } from './context/cartContext';


function App() {
  return (

    <div className="App">
      
      <CartProvider>
        
        <Switch>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
