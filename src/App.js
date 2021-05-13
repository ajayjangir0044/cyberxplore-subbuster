import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Find from './pages/Find'
import Header from './pages/Header'
const App=()=> {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/find" component={Find}/>
    </Switch>
    </>
  );
}

export default App;
