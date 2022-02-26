import { Component } from 'react';
import React from 'react'
import './App.js';

class abcde extends Component {

    constructor(props) {
        super(props)            // must fcall super constructor before using this in derived class constructor
        this.incomingStream = {
            value: '',
            letter: '',
            letterArray: '',
            time: '',
        }

        this.state = 
            {
                disabledTyping:false
            }
        // callback functions, this binding is necessary to make 'this' work in the callback
        this.gameReset = this.gameReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateState = this.updateState.bind(this);
        this.nextLetterIterator = 0
        this.gameStarting = true
        
        this.alphabet = [
            { letter: 'A ', state: false },
            { letter: 'B ', state: false },
            { letter: 'C ', state: false },
            { letter: 'D ', state: false },
            { letter: 'E ', state: false },
            { letter: 'F ', state: false },
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
        this.incomingStream.letter = e.target.value.replace(this.incomingStream.value.at(-1), "").toUpperCase()
        this.incomingStream.letterArray = [...this.incomingStream.letterArray, this.incomingStream.letter]
        this.incomingStream.value = [...this.incomingStream.value, e.target.value]
        this.incomingStream.time = [...this.incomingStream.time, e.timeStamp]

        this.gameLogic()
    }

    // reset the game 
    gameReset() {
        // clear all input fields
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        // change all in alphabet dictionary to false and red colour
        Object.keys(this.alphabet).map(item => {
            this.alphabet[item].state = false
        })
        
        this.gameStarting = true
        this.nextLetterIterator = 0
        
        console.log('Your input value is: ' + this.incomingStream.value)
        
        // empty state array
        return(this.setState({
            value: "",
            letter: "",
            time: "",
            disabledTyping: false,
        }))
    }


    gameEnd() {
        //

        // disable typing
        this.setState({disabledTyping: true})
        
        // clear alphabet
        
        // show total time
        
        // press to reset game

        // return{
        //     return(
        //         pass
        //         // <input id='inputField' type="text" onChange={this.handleChange} onKeyUp={this.updateState} disable={true}></input>
        //     )
        // }


    }

    updateState() {
        console.log('updateState now')
        this.setState({1:"1"})
    }


    runningTime() {
        return new Date().getTime() - this.initialTime
    }

    gameLogic() {
        let latestLetter = this.incomingStream.letter

        // check it is  letter
        console.log("letter", latestLetter, this.nextLetterIterator)

        // if letter is A, start game
        if(latestLetter === 'A' && this.gameStarting){
            this.initialTime = new Date().getTime()
            this.alphabet[this.nextLetterIterator].state = true
            this.nextLetterIterator = this.nextLetterIterator + 1
            this.gameStarting = false 
            console.log('start game', this.alphabet)
        }

        console.log("INCREMENT", latestLetter + " ", this.alphabet[this.nextLetterIterator].letter)
        // if new letter is the expected next letter
        if( (latestLetter + " ") === this.alphabet[this.nextLetterIterator].letter ) {
            console.log("we should only be here if correct: ", latestLetter)
            // if this next letter is not already done
            if( this.alphabet[this.nextLetterIterator - 1].state === true ){
                this.alphabet[this.nextLetterIterator].state = true
                this.nextLetterIterator = this.nextLetterIterator + 1
                // if new letter is z, then end the game
                if( latestLetter === 'Z' ){
                    console.log('game end')
                    this.gameEnd()
                }
            }
        }
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
        console.log('displayPerLetterTime')
        // return what inside this, .map is a for loop around all of the this.incomingStream.time
        return this.incomingStream.time && this.incomingStream.time.map((_, index) => {

            // reverse the array
            let time_reverse = this.incomingStream.time[this.incomingStream.time.length - 1 - index]
            let letter_reverse = this.incomingStream.letterArray[this.incomingStream.letterArray.length - 1 - index]
            let prev_time_reverse = this.incomingStream.time[this.incomingStream.time.length - 2 - index]

            if ((this.incomingStream.time.length - 1 - index) === 0 ) {
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

                <button id='gameReset' type="submit" onClick={this.gameReset} >Reset Game</button>

                <div id='alphabet' onKeyUp={this.displayAlphabet()}></div>
                {this.displayAlphabet()}

                <br></br>
                {/* <input id='inputField' type="text" onChange={this.handleChange} ref={(input) => this.myinput = input} /> */}
                {/* <input id='inputField' type="text" onChange={this.handleChange} ></input> */}
                <input 
                    id='inputField' 
                    type="text" 
                    onChange={this.handleChange} 
                    onKeyUp={this.updateState}
                    disabledTyping={(this.state.disabledTyping)? "disabledTyping" : ""}
                />

                <ul>{this.incomingStream.letterArray.at(-1)}  {this.incomingStream.time.at(-1)}</ul>

                <br></br>
                ---
                <br></br>

                {this.displayPerLetterTime()}

            </div>
        )
    }
}



export default abcde
