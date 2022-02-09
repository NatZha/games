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
        this.incomingStream = {
            value: '',
            letter: '',
            letterArray: '',
            time: '',
        }

        // callback functions, this binding is necessary to make 'this' work in the callback
        this.resetGame = this.resetGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateState = this.updateState.bind(this);
        this.nextLetterIterator = 0
        this.gameStarting = true
        
        // this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

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
        // this.setState(
        //     {
        //         value: [...this.incomingStream.value, e.target.value],
        //         letter: [...this.incomingStream.letter, e.target.value.replace(this.incomingStream.value.at(-1), "").toUpperCase()],
        //         time: [...this.incomingStream.time, e.timeStamp],
        //     }
        // )

        // this.setState({
        //     value: [...this.incomingStream.value, e.target.value],
        //     letter: [...this.incomingStream.letter, e.target.value.replace(this.incomingStream.value.at(-1), "").toUpperCase()],
        //     time: [...this.incomingStream.time, e.timeStamp],
        // }, function () {
        //     console.log("ARE WERE THERE YET", this.incomingStream);
        // });

        // console.log("start0", this.incomingStream)

        this.incomingStream.letter = e.target.value.replace(this.incomingStream.value.at(-1), "").toUpperCase()
        this.incomingStream.letterArray = [...this.incomingStream.letterArray, this.incomingStream.letter]
        this.incomingStream.value = [...this.incomingStream.value, e.target.value]
        this.incomingStream.time = [...this.incomingStream.time, e.timeStamp]

        this.gameLogic()
    }

    resetGame() {
        // clear all input fields
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        
        Object.keys(this.alphabet).map(item => {
            this.alphabet[item].state = false
        })
        
        this.gameStarting = true
        this.nextLetterIterator = 0
        

        console.log('Your input value is: ' + this.incomingStream.value)
        
        // const removeDiv = useCallback((itemId) => {
        //     // filter out the div which matches the ID
        //     setItems(items.filter((id) => id !== itemId));
        //   }, [items]);

        // removeDiv('LetterTime')

        
        // empty state array
        return(this.setState({
            value: "",
            letter: "",
            time: "",
        }))
    }


    // gameEnd() {


    //     // press to reset game
    // }

    updateState() {
        console.log('updateState now')

        // this.alphabet.setState(
        //     this.alphabet[this.nextLetterIterator - 1].state = true

        // )
        // this.incomingStream.letter
       // empty state array
    //    return(
           this.setState({1:"1"})

    //    )
    }


    runningTime() {
        return new Date().getTime() - this.initialTime
    }

    gameLogic() {
        // this.alphabet 

        // this.incomingStream
        let latestLetter = this.incomingStream.letter

        // check it is  letter
        console.log("letter", latestLetter, this.nextLetterIterator)



        // if ( latestLetter && latestLetter.length === 1 && latestLetter.match(/[a-z]/i) ){
        //     this.currentLetter = latestLetter
        // }

        // if letter is A, start game
        if(latestLetter === 'A' && this.gameStarting){
            this.initialTime = new Date().getTime()
            
            this.alphabet[this.nextLetterIterator].state = true

            
            
            this.nextLetterIterator = this.nextLetterIterator + 1
            this.gameStarting = false 
            console.log('start game', this.alphabet)
        }



        console.log("INCREMENT", latestLetter + " ", this.alphabet[this.nextLetterIterator].letter)
        if( (latestLetter + " ") === this.alphabet[this.nextLetterIterator].letter ) {


            console.log("we should only be here if correct: ", latestLetter)
            if( this.alphabet[this.nextLetterIterator - 1].state === true ){

                this.alphabet[this.nextLetterIterator].state = true

                this.nextLetterIterator = this.nextLetterIterator + 1

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

                <button id='resetGame' type="submit" onClick={this.resetGame} >Reset Game</button>

                <div id='alphabet' onKeyUp={this.displayAlphabet()}></div>
                {this.displayAlphabet()}

                <br></br>
                {/* <input id='inputField' type="text" onChange={this.handleChange} ref={(input) => this.myinput = input} /> */}
                {/* <input id='inputField' type="text" onChange={this.handleChange} ></input> */}
                <input id='inputField' type="text" onChange={this.handleChange} onKeyUp={this.updateState}></input>

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
