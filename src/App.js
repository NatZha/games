import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TicTacToe from './TicTacToe.js';



function App() {
  return (
    <>

    {/* Router contains all of the routes for the pages/paths */}
    <Router>    
        time  
      <Switch>

        <Route path='/games/tictactoe/'><TicTacToe /></Route>

      </Switch>

    </Router>
    </>
  );
}

export default App;
