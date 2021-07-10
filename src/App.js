import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TicTacToe from './TicTacToe.js';
import Home from './Home.js';


function App() {
    return (
        <>

        {/* Router contains all of the routes for the pages/paths */}
        <Router>    
            time  
            <Switch>
                <Route path='/games/' exact component={Home} />
                <Route path='/games/tictactoe/'><TicTacToe /></Route>
                <Route path='/games/tictactoe2/' component={TicTacToe} />


            </Switch>
            Closing Statement
        </Router>
        </>
    );
}

export default App;
