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

        // this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        this.alphabet = [ 
            {letter:'a', state: false}, 
            {letter:'b', state: false}, 
            {letter:'c', state: false}, 
            {letter:'d', state: false}, 
            {letter:'e', state: false}, 
            {letter:'f', state: false}, 
            {letter:'g', state: false}, 
            {letter:'h', state: false}, 
            {letter:'i', state: false}, 
            {letter:'j', state: false}, 
            {letter:'k', state: false}, 
            {letter:'l', state: false}, 
            {letter:'m', state: false}, 
            {letter:'n', state: false}, 
            {letter:'o', state: false}, 
            {letter:'p', state: false}, 
            {letter:'q', state: false}, 
            {letter:'r', state: false}, 
            {letter:'s', state: false}, 
            {letter:'t', state: false}, 
            {letter:'u', state: false}, 
            {letter:'v', state: false}, 
            {letter:'w', state: false}, 
            {letter:'x', state: false}, 
            {letter:'y', state: false}, 
            {letter:'z', state: false}
        ]
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


    displayAlphabet() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        var alphabetString = alphabet.join(' ');

        return (
            Object.keys(this.alphabet).map(item => {
                console.log("BBBBBBBBBBB", this.alphabet[item].letter);
                return (
                    <div>
                        {this.alphabet[item].letter}
                    </div>
                )
            })
        )

        return (
            <div>
                {alphabetString}
            </div>
        );

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

                {this.displayAlphabet()}

                {/* <input id='inputField' type="text" onChange={this.handleChange} ref={(input) => this.myinput = input} /> */}
                <input id='inputField' type="text" onChange={this.handleChange}></input>

                <ul>{this.state.letter.at(-1)}  {this.state.time.at(-1)}</ul>

                <br></br>
                ---
                <br></br>
                
                {this.displayPerLetterTime()}

                <button id='resetGame' type="submit" onClick={this.resetGame} >Reset Game</button>
            </div>
        )
    }
}











export default abcde
