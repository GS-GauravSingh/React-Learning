import { useState, useCallback, useEffect, useRef } from "react";
import "./PasswordGenerator.css"
function PasswordGenerator() {

    // State variable for range input - Password length
    const [passwordLength, setPasswordLength] = useState(8);

    // State variable for Including or Excluding Numbers in Password - by default Numbers are not allowed in the password.
    const [isNumberAllowed, setNumberAllowed] = useState(false);

    // State variable for Including or Excluding Special Characters in Password - by default Special Characters are not allowed in the password.
    const [isSpecialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);

    // State variable for generating password - default value is empty string because we are gonna generate a password.
    const [password, setPassword] = useState("");

    // useRef Hook
    const passwordRef = useRef(null);

    // Function to generate a password.
    const passwordGenerator = useCallback(function () {

        let generatedPassword = "";
        let dataForPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        // If numbers are allowed in the password.
        if (isNumberAllowed) {
            dataForPassword += "0123456789";
        }

        // If special characters are allowed in the password.
        if (isSpecialCharacterAllowed) {
            dataForPassword += "~!@#$%^&*()-_+=[]{}";
        }

        // Generate password of length - passwordLength.
        let len = dataForPassword.length;
        for (let i = 0; i < passwordLength; i++) {
            // Pick random characters form the string "dataForPassword".
            let randomIdx = parseInt(Math.random() * 100) % len;
            let randomChar = dataForPassword[randomIdx];
            generatedPassword += randomChar;
        }

        // Set or Update the generated password.
        setPassword(generatedPassword);


    }, [passwordLength, isNumberAllowed, isSpecialCharacterAllowed, setPassword]);

    // useEffect Hook
    useEffect(function () {
        passwordGenerator();
    }, [passwordLength, isNumberAllowed, isSpecialCharacterAllowed, passwordGenerator]);

    // Function to copy password to clip board.
    const copyPasswordToClipboard = useCallback(function(){
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <div className="outerDiv">

            <h3 className="heading">Password Generator</h3>
            <div className="content">

                <div className="display_password-container">
                    <input type="text" 
                    value={password}
                    className="display"
                    readOnly
                    ref={passwordRef}/>

                    <span className="copyIcon highlightText" onClick={copyPasswordToClipboard}>
                        <i class="fa-regular fa-copy"></i>
                    </span>
                </div>


                <div className="pswd-length-container">
                    <div>
                        <p>Character Length</p>
                        <p className="highlightText">{passwordLength}</p>
                    </div>

                    <div>
                        <label htmlFor="passwordLength"></label>
                        <input type="range" name="Password-Length" id="passwordLength" min={8} max={25} step={1} value={passwordLength} onChange={function (event) {
                            setPasswordLength(event.target.value);
                        }} />
                    </div>
                </div>

                <div className="additionalOptions">

                    {/* <p>
                        <label htmlFor="uppercaseLetters">Include Uppercase Letters</label>
                        <input type="checkbox" id="uppercaseLetters" />
                    </p>

                    <p>
                        <label htmlFor="lowercaseLetters">Include Lowercase Letters</label>
                        <input type="checkbox" id="lowercaseLetters" />
                    </p> */}

                    <p>
                        <label htmlFor="numbers">Include Numbers</label>
                        <input type="checkbox" id="numbers" onChange={function () {
                            setNumberAllowed(!isNumberAllowed);

                        }} />
                    </p>

                    <p>
                        <label htmlFor="specialCharactors">Include Symbols</label>
                        <input type="checkbox" id="specialCharactors" onChange={function () {
                            setSpecialCharacterAllowed(!isSpecialCharacterAllowed);
                        }} />
                    </p>
                </div>

                <div className="generateButton">
                    <button onClick={passwordGenerator}>GENERATE <i class="fa-solid fa-arrow-right"></i></button>
                </div>



            </div>

        </div>
    );
}

export default PasswordGenerator;