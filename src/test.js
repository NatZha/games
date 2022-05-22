import { Component } from 'react';
import React from 'react'
import './App.js';


function test() {
    return (
        <div>
            <h2>TEST FILE</h2>
            <ul>
                <li>
                    <a href="/games/tictactoe.html"> TicTacToe1 </a>
                </li>
                <li>
                    <a href="/games/tictactoe2.html"> TicTacToe2 </a>
                </li>

                testestestestes


                <li>
                    <a href="/games/abcde.html"> ABCDE Game</a>
                </li>
            </ul>

            <a target='_blank' rel="noreferrer" href="https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually">Why it doesnt work</a>
            The pages do not work because it implements a history of the game, which does not work on html5. Should instead consider using hash history. 


            The tictactoe games will only work offline.

        </div>
    )
}


export default test
