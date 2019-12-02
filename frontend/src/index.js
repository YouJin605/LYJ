// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Post from './containers/Post';
import Good from './containers/Good';
import Shop from './containers/Shop';
import Lookbook from './containers/Lookbook';
import Board from './containers/Board';
import HomeApp from './HomeApp';
import GoodGatherer from './components/GoodGatherer';
import Notice from './containers/Notice';
import Contact from './containers/Contact';
import Cs from './containers/Cs';
import LookGatherer from './components/LookGatherer';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeApp}/>
    <Route path="/" component={App}>
        <Route path="shop" component={Shop}>
          <Route path=":id" component={GoodGatherer}/>
        </Route>
        <Route path="lookbook" component={Lookbook}>
        <Route path=":modelNumber" component={LookGatherer}/>
        </Route>
        <Route path="board" component={Board}>
        <Route path=":id" component={Post}/>
        </Route>
    </Route>
    <Router>
    <Route path="/Notice" component={Notice}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/Cs" component={Cs}/>
    </Router>
  </Router>,
  document.getElementById('root')
);

