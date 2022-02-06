import  { Component } from 'react';
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

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: ''
    //     }

    //     this.updateInput = this.updateInput.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.state = {
    //         value:"INITIAL TEXT"
    //     }
    //     // this.errorMessage = document.querySelector('p.error');

    // }


    // updateInput(event) {
    //     this.setState({ username: event.target.value })
    // }


    // handleSubmit() {
    //     console.log('Your input value is: ' + this.state.username)
    //     // this.errorMessage.textContent = "Phone is Null";

    //     //Send state to the server code
    // }



    // render() {
    //     return (
    //         <div>
    //             <input type="text" onChange={this.updateInput}></input>
    //             <input type="submit" onClick={this.handleSubmit} ></input>
    //             <p class="error" value={this.state.value}></p>
    //         </div>
    //     );
    // }


    constructor(props) {
        super(props)            // must fcall super constructor before using this in derived class constructor
        this.state = {
            value: '',
            letter: '',
            time:'',
        }

        // callback functions, this binding is necessary to make 'this' work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // this.state.value.addEventListener('keyup', (e) => {
    //     if (phone.validity.valid) {
    //         errorMessage.innerHTML = '';
    //     } else {
    //         showError();
    //     }
    // });

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

    handleSubmit(){
        console.log('Your input value is: ' + this.state.value)
        //Send state to the server code
    }
        
    

    render() {
        return (
            <div>
                <h2>ALPHABET GAME</h2>
                
                <h3>The goal of this game is to see how fast a person can type the english alphabet</h3>

                <input type="text" onChange={(e) => { this.handleChange(e) }} ref={(input) => this.myinput = input} />

                <input readOnly value={this.state.value}/>

                <ul>{this.state.letter.at(-1)}  {this.state.time.at(-1)}</ul>

                {/* create new line for  every element in array */}
                { this.state.letter && this.state.letter.map(
                    itr => <p>{itr}</p>
                )}

                <ul>
                    {this.state.value && this.state.value.map(item =>
                        <li key="{item}">{item}</li>
                    )}
                </ul>




                <button type="submit" onClick={this.handleSubmit} >A BUTTON</button>
            </div>
        )
    }
}












// function abcde() {

//     // var username = document.getElementById("steamAccountName").value
//     // document.getElementById("output_eleement").innerText = username

//     var displayUsername = function () {

//         var username = document.getElementById('username').value

//         if (username !== '') {

//             document.getElementById('message').innerHTML = 'Hello ' + username + '!'

//         }

//     }



//     return (
//         // creates jsx so that you can write in html
//         <>

//             <input type="text" name="username" id="username"></input>

//             <button class="clickMe" onclick="displayUsername();">Click ME!</button>

//             <div id="message"></div>

//             <div>
//                 This is the game ABCDE
//             </div>



//             <form>
//                 <label>
//                     Name:
//                     <input type="text" name="name" />
//                 </label>

//                 <input type="submit" value="Submit" />
//             </form>

//             <form>
//                 <label for="phone">Phone Number (Format: +99 999 999 9999)</label>
//                 <input type="tel" id="phone" name="phone" pattern="[\+]\d{2}[\s]\d{3}[\s]\d{3}[\s]\d{4}" required></input>
//                 <p class="error"></p>
//                 <button>Submit</button>
//             </form>
//         </>



//     )


// }

export default abcde
