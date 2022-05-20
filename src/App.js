import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TicTacToe from './TicTacToe.js';
import Home from './Home.js';
import test from './test.js';
import abcde from './abcde.js';



function App() {
    return (
        <>

        {/* Router contains all of the routes for the pages/paths */}
        <Router>    
            <div>
                <h1>GAMES</h1>
            </div>

            <Switch>
                <Route path='/games/' exact component={Home} />
                <Route path='/games/tictactoe/'><TicTacToe /></Route>           {/* uses a route method to get the path to the site */}
                <Route path='/games/tictactoe2/' component={TicTacToe} />       {/* uses a component method to get the path to the site */}
                <Route path='/games/abcde/' component={abcde} />       {/* uses a component to a function method to get the path to the site */}
                <Route path='/games/test/' component={test} />       {/* uses a component to a function method to get the path to the site */}


            </Switch>
        </Router>
        </>
    );
}

export default App;
