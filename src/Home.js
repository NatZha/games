import React from 'react'
import './App.js';


function Home() {
    return (
        <div>
            This is the Home page
            <ul>
                <li>
                    <a href="/games/tictactoe"> TicTacToe1 </a>
                </li>
                <li>
                    <a href="/games/tictactoe2"> TicTacToe2 </a>
                </li>
            </ul>

        </div>
    )
}

export default Home
