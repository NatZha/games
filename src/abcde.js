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
        this.nextLetter = 'B'

        // this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        this.alphabet = [
            { letter: 'A ', state: false },
            { letter: 'B ', state: false },
            { letter: 'C ', state: false },
            { letter: 'D ', state: false },
            { letter: 'E ', state: false },
            { letter: 'F ', state: true },
            { letter: 'G ', state: false },
            { letter: 'H ', state: false },
            { letter: 'I ', state: false },
            { letter: 'J ', state: false },
            { letter: 'K ', state: false },
            { letter: 'L ', state: false },
            { letter: 'M ', state: false },
            { letter: 'N ', state: false },
            { letter: 'O ', state: false },
            { letter: 'P ', state: false },
            { letter: 'Q ', state: false },
            { letter: 'R ', state: false },
            { letter: 'S ', state: false },
            { letter: 'T ', state: false },
            { letter: 'U ', state: false },
            { letter: 'V ', state: false },
            { letter: 'W ', state: false },
            { letter: 'X ', state: false },
            { letter: 'Y ', state: false },
            { letter: 'Z ', state: false }
        ]
    }


    // do something with the new change
    handleChange(e) {
        this.setState(
            {
                value: [...this.state.value, e.target.value],
                letter: [...this.state.letter, e.target.value.replace(this.state.value.at(-1), "").toUpperCase()],
                time: [...this.state.time, e.timeStamp],
            }
        )

        this.gameLogic()
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


    runningTime() {
        return new Date().getTime() - this.initialTime
    }

    gameLogic() {
        // this.alphabet 

        // this.state
        let latestLetter = this.state.letter[this.state.time.length-1]
        // check it is  letter
        console.log("letter", latestLetter)
        if ( latestLetter && latestLetter.length === 1 && latestLetter.match(/[a-z]/i) ){
            this.currentLetter = latestLetter
        }

        if(this.currentLetter === 'A'){
            this.initialTime = new Date().getTime()
            this.nextLetter = 'B'
            console.log('start game')
        }

        Object.keys(this.alphabet).map(item => {
            console.log(item, this.alphabet[item].letter)
            
            if (this.currentLetter == this.alphabet[item].letter) {
                this.nextLetter = this.alphabet[item+1].letter
            }



            if ( this.current === item ){

                this.currentLetter = item
                console.log(this.currentLetter)
            }

        })

        // if this.currentLetter = latestLetter, nextletter = itme+1

    }

    setStyle(name, item) {
        if (name === "alphabetList") {
            return { color: this.alphabet[item].state ? 'green' : 'red' }
        }
    }

    displayAlphabet() {
        return (
            Object.keys(this.alphabet).map(item => {
                return (
                    <span style={this.setStyle("alphabetList", item)}>
                        {this.alphabet[item].letter}
                    </span>
                )
            })
        )
    }


    displayPerLetterTime() {
        // return what inside this, .map is a for loop around all of the this.state.time
        return this.state.time && this.state.time.map((_, index) => {

            // reverse the array
            let time_reverse = this.state.time[this.state.time.length - 1 - index]
            let letter_reverse = this.state.letter[this.state.letter.length - 1 - index]
            let prev_time_reverse = this.state.time[this.state.time.length - 2 - index]

            if ((this.state.time.length - 1 - index) === 0 ) {
                time_reverse = 0
                prev_time_reverse = 0
            }

            return (
                <ul id='LetterTime'>
                    {letter_reverse} - {time_reverse - prev_time_reverse}
                </ul>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>ALPHABET GAME</h2>

                <h3>The goal of this game is to see how fast a person can type the english alphabet</h3>

                {this.gameLogic()}
                
                <button id='resetGame' type="submit" onClick={this.resetGame} >Reset Game</button>

                {this.displayAlphabet()}

                <br></br>
                {/* <input id='inputField' type="text" onChange={this.handleChange} ref={(input) => this.myinput = input} /> */}
                <input id='inputField' type="text" onChange={this.handleChange}></input>

                <ul>{this.state.letter.at(-1)}  {this.state.time.at(-1)}</ul>

                <br></br>
                ---
                <br></br>

                {this.displayPerLetterTime()}

            </div>
        )
    }
}











export default abcde
