import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

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


    // In this case the user, pwd and matchPwd states are the dependencies, so when
    // the user, pwd or matchPwd states change, the error message is cleared
    useEffect(() => {
        setErrMsg(''); // clear error message
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        </>
    )
}

export default Register