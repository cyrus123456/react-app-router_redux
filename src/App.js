import {
  Route, withRouter,
  // NavLink,
  Switch, Redirect
} from "react-router-dom";
import store from "./redux/store";
import { addAcion, reduceAcion, oddAddAcion, asyncAddAcion, } from './redux/countAction'
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.jsx';
import More from './components/More/More.jsx';



function App(props) {
  const [count, setCount] = useState(0)
  const [changeCount, setChangeCount] = useState('1')
  function handleChangeCount(value) {
    setChangeCount(value)
  }

  function add(value) {
    setCount(count + parseInt(value))
    store.dispatch(addAcion(value))
  }
  function reduce(value) {
    setCount(count - parseInt(value))
    store.dispatch(reduceAcion(value))
  }
  function oddAdd(value) {
    if (count % 2 !== 0) {
      setCount(count + parseInt(value))
      store.dispatch(oddAddAcion(value))
    }
  }
  function asyncAdd(value, timeout) {
    setTimeout(() => {
      setCount(count + parseInt(value))
    }, timeout);
    store.dispatch(asyncAddAcion(value, 1000))
  }
  function parmsHome() {
    console.log('parmsHome', props)
    props.history.push(`/Home/777/776`)
  }
  function seachMore() {
    console.log('seachMore', props)
    props.history.push(`/More?id=999&id2=998`)
  }
  function stateMore() {
    console.log('stateMore', props)
    props.history.push('/More', { id: 444, id2: 443 })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          总数：{count} /redux:{store.getState()}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <NavLink to="/Home"> Home </NavLink>
      <NavLink to="/More"> More </NavLink>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/More" component={More} />
        <Redirect to="/Home"></Redirect>
      </Switch> */}
      <button onClick={parmsHome} >parms路由传参</button>
      <button onClick={seachMore} >seach路由传参</button>
      <button onClick={stateMore} >state路由传参</button>
      {/* <button onClick={() => parmsHome(props)} >parms路由传参</button>
      <button onClick={() => seachMore(props)} >seach路由传参</button>
      <button onClick={() => stateMore(props)} >state路由传参</button> */}
      <Switch>
        <Route path="/Home/:id/:id2" component={(props) => <Home {...props} changeCount={changeCount} handleChangeCount={handleChangeCount} add={add} reduce={reduce} oddAdd={oddAdd} asyncAdd={asyncAdd} />} />
        <Route path="/More" component={More} />
        <Redirect to="/Home"></Redirect>
      </Switch>
    </div>
  );
}

// function parmsHome() {
//   console.log('parmsHome$', arguments[0])
//   // arguments[0]
// }
// function seachMore() {
//   console.log('seachMore$', arguments[0])
//   // arguments[0]
// }
// function stateMore() {
//   console.log('stateMore$', arguments[0])
//   // arguments[0]
// }

export default withRouter(App);
