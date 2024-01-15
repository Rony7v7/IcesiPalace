import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../services/AuthService";
import '../styles/Register/register.css';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /@.*\./;
const REGISTER_URL = '/auth/register';

const Register = () => {

    // hooks for controlled inputs with the references

    //   This refrence is used to focus the username input on page load
    const userRef = useRef();

    //   This reference is used to focus the error message on submit
    const errRef = useRef();


    // These are the states for the username input

    //  This is the state for the username input
    const [user, setUser] = useState('');

    //  This is the state that controls if the username is valid or not
    const [validName, setValidName] = useState(false);

    //   This is the state that controls if this component is in focus or not
    const [userFocus, setUserFocus] = useState(false);


    // These are the states for the password input, the same as the username input
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // These are the states for the email input, the same as the username input
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // These are the states for the confirm password input, the same as the username input
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // These are the states for the possible error message and success message
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Thes are the useEffects that control the focus and the validation of the inputs


    // It is used to focus the username input field when the component is first rendered cause of the empty array(There are no dependencies)
    useEffect(() => {
        userRef.current.focus();
    }, [])


    // In this case the user state is the dependency, so when the user state changes, the validation is executed
    useEffect(() => {
        // This is the validation, it is a regex test that consist of 
        // a letter, followed by 3 to 23 letters, numbers, underscores or hyphens
        setValidName(USER_REGEX.test(user));
    }, [user])

    // In this case the pwd and matchPwd states are the dependencies, so when 
    // the pwd or matchPwd states change, the validation is executed
    useEffect(() => {

        // This is the validation, it is a regex test that consist of
        // 8 to 24 characters, at least one uppercase letter, one lowercase letter, one number and one special character
        setValidPwd(PWD_REGEX.test(pwd));

        // This validation checks if the password and the confirm password are the same
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    // In this case the email state is the dependency, so when the email state changes, the validation is executed
    useEffect(() => {
        // This is the validation, it is a regex test that consist of
        // an email with an @ and a .
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    // In this case the user, pwd, email and matchPwd states are the dependencies, so when
    // the user, pwd or matchPwd states change, the error message is cleared
    useEffect(() => {
        setErrMsg(''); // clear error message
    }, [user, pwd, matchPwd, email])

    // This is the function that is called when the form is submitted
    const handleSubmit = async (e) => {
        // prevent default form submission
        e.preventDefault();

        // if button enabled with JS hack then submit form

        // validate user and pwd
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        // if either is invalid then set error message and return
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        AuthService.register(user, pwd, email)
            .then(() => {

                setSuccess(true);
                //clear state and controlled inputs
                //need value attrib on inputs for this
                setUser('');
                setPwd('');
                setMatchPwd('');
                setEmail('');

            })
            .catch((err) => {
                setErrMsg('Email Alredy taken or Registration failed')
            }
            );

    }


    return (
        <div className="Register">
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    {/* This is an error message that is only visible when there is an error cause of the ternary operator */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <h1>Register</h1>

                    {/* This is the form that is submitted when the submit button is clicked 
                    The handleSubmit function is called when the form is submitted
                    */}
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} /> {/* This is the check icon that is only visible when the username is valid */}
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> {/* This is the x icon that is only visible when the username is invalid */}
                        </label>

                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)} // This is the function that changes the state of the username input
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote" // This is the id of the error message that is only visible when the input is in focus and the username is invalid
                            onFocus={() => setUserFocus(true)} // This is the function that changes the state of the username input focus
                            onBlur={() => setUserFocus(false)} // This is the function that changes the state of the username input focus
                        />

                        {/* This is the error message that is only visible when the input is in focus and the username is invalid */}
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} /> {/* This is the check icon that is only visible when the username is valid */}
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !user ? "hide" : "invalid"} /> {/* This is the x icon that is only visible when the username is invalid */}
                        </label>

                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="on"
                            onChange={(e) => setEmail(e.target.value)} // This is the function that changes the state of the username input
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote" // This is the id of the error message that is only visible when the input is in focus and the username is invalid
                            onFocus={() => setEmailFocus(true)} // This is the function that changes the state of the username input focus
                            onBlur={() => setEmailFocus(false)} // This is the function that changes the state of the username input focus
                        />

                        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must contain an @ and a .<br />
                        </p>

                        {/* This is the password label*/}
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>

                        {/* This is the password input field */}
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)} // This is the function that changes the state of the password input
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />

                        {/* This is the error message that is only visible when the input is in focus and the password is invalid */}
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />

                            {/* This indicates the special characteres accepted */}
                            Allowed special characters:
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>

                        {/* This is the confirm password label*/}
                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>

                        {/* This is the confirm password input field */}
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />

                        {/* This is the error message that is only visible when the input is in focus and the confirm password is invalid */}
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        {/* This is the submit button that is only enabled when the username, password and confirm password are valid */}
                        <button disabled={!validName || !validPwd || !validMatch || !validEmail} type="submit">
                            Sign Up
                        </button>

                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="/login">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default Register