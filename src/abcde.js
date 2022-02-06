import { Component } from 'react';
import React from 'react'
import './App.js';



// const phone = document.getElementById("phone");
// const button = document.getElementsByTagName('button')[0];
// const errorMessage = document.querySelector('p.error');

// button.addEventListener('click', (e) => {
//     if (phone == null){
//         errorMessage.textContent = "Phone is Null";
//     }
//     if (!phone.validity.valid) {
//         showError();
//         e.preventDefault();
//     }
// });

// phone.addEventListener('keyup', (e) => {
//     if (phone.validity.valid) {
//         errorMessage.innerHTML = '';
//     } else {
//         showError();
//     }
// });

// function showError() {
//     if (phone.validity.valueMissing) {
//         errorMessage.textContent = "Phone is required";
//     }
//     if (phone.validity.patternMismatch) {
//         errorMessage.textContent = "You are not supposed to use characters like this one: " + phone.value;
//     }
//     if (phone.validity.valid) {
//         phone.setCustomValidity("");
//     }
// }



class abcde extends Component {

    constructor(props) {
        super(props)            // must fcall super constructor before using this in derived class constructor
        this.state = {
            value: '',
            letter: '',
            time: '',
        }

        // callback functions, this binding is necessary to make 'this' work in the callback
        this.resetGame = this.resetGame.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }


    // do something with the new change
    handleChange(e) {
        this.setState(
            {
                value: [...this.state.value, e.target.value],
                letter: [...this.state.letter, e.target.value.replace(this.state.value.at(-1), "")],
                time: [...this.state.time, e.timeStamp],
            }
        )
        console.log('handle change called\n', e)
        console.log(e.timeStamp, e.target.value)            // time that the letter is typed out based on page load time
        console.log(this.state.value, this.state.letter, this.state.time)
    }

    resetGame() {
        // clear all input fields
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        
        // empty state array
        this.setState({
            value: "",
            letter: "",
            time: "",
        })

        console.log('Your input value is: ' + this.state.value)
    }

    displayPerLetterTime() {
        // return what inside this, .map is a for loop around all of the this.state.time
        return this.state.time && this.state.time.map((_, index) => {

            // reverse the array
            const time_reverse = this.state.time[this.state.time.length - 1 - index]
            const letter_reverse = this.state.letter[this.state.letter.length - 1 - index]

            console.log(index, time_reverse, letter_reverse)

            return (
                <ul id='LetterTime'>
                    {letter_reverse} - {time_reverse}
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>ALPHABET GAME</h2>

                <h3>The goal of this game is to see how fast a person can type the english alphabet</h3>

                
                <input id='inputField' type="text" onChange={this.handleChange} ref={(input) => this.myinput = input} />
                {/* <input id='inputField' type="text" onChange={(e) => { this.handleChange(e) }}>{this.state.value[-1]}</input> */}

                <ul>{this.state.letter.at(-1)}  {this.state.time.at(-1)}</ul>

                <br></br>
                ---
                <br></br>
                
                {this.displayPerLetterTime()}

                <button id='resetGame' type="submit" onClick={(e) => {this.resetGame();}} >Reset Game</button>
            </div>
        )
    }
}











export default abcde
