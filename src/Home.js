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

            <a target='_blank' href="https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually">Why it doesnt work</a>
            The pages do not work because it implements a history of the game, which does not work on html5. Should instead consider using hash history

        </div>
    )
}

export default Home
