
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

function SignupForm(){
    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');
    const [signupErrorMessage,setSignupErrorMessage]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const signupusernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function signupUsernameHandler(event){
        setSignupUsername(event.target.value);
    }
   
    function signupusernameCheck() {
        if(signUpusername===""){
            setSignupErrorMessage(prev=>({
                ...prev,username:'please Enter username'}));
        }
        else if(!signupusernamePattern.test(signUpusername)){
            setSignupErrorMessage(prev=>({
                ...prev,username:'Caps,nums,sml,_,-  only allowed'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,username:''}));
        }
    }

    function signupEmailHandler(event){
        setSignupEmail(event.target.value);
    }
    function signUpemailCheck(){
        if(signupEmail===""){
            setSignupErrorMessage(prev=>({
                ...prev,email:'please enter email'}));
        }
        else if(!signupEmailPattern.test(signupEmail)){
            setSignupErrorMessage(prev=>({
                ...prev,email:'enter valid email'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,email:''}));
        }
    }

    function signupPasswordHandler(event){
        setSignupPassword(event.target.value);
    }
    function signupPasswordValid(){
        if(signupPassword===""){
            setSignupErrorMessage(prev=>({
                ...prev,password:'please enter password'}));
        }
        else if(signupPassword.length<8){
            setSignupErrorMessage(prev=>({
                ...prev,password:'your password is weak'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,password:''}));
        }
    }

    function signupConfirmHandle(event){
        setConfirmSignUp(event.target.value);
    }
    function confirmPasswordValid() {
        if(confirmSignup===""){
            setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'please render to confirm password'}));
        }
        else if(confirmSignup !== signupPassword){
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'password is did not match'}));
        }
        else{
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:''}));
        }
    }

    const [firstPasswordType,setFirstPasswordType]=useState("password");
    function signupShowPassword(){
        setFirstPasswordType('text');
    }
    function againClosePassword(){
        setFirstPasswordType('password');
    }

    const [confirmPasswordShow,setConfirmPasswordShow]=useState("password")
    function signupConfirmShowPassword(){
        setConfirmPasswordShow('text');
    }
    function confirmAgainClose(){
        setConfirmPasswordShow('password');
    }

    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }

    return(
        <>
            <section className="flex flex-col items-center py-7 bg-bg-section pt-[80px] mt-5 gap-3">
                <div>
                    <h1 className="text-2xl text-primary-text font-semibold">Signup</h1>
                </div>

                <form className="flex flex-col gap-[10px] items-center bg-form-bg text-form-text p-[20px] rounded-[10px] w-[295px]
                sm:w-[375px] shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="name">Username:</label>
                        <div className="w-[275px] h-[35px] rounded-[5px] text-form-text px-2 bg-form-input flex items-center
                        sm:w-[300px]">
                            <input type="text" placeholder="Username"  
                            id="name" value={signUpusername} onChange={signupUsernameHandler} className="placeholder-form-text px-[9px] w-[225px] h-[35px] border-none outline-none
                            sm:w-[275px]"/>
                           <RiUserFill className="text-lg"/>
                          
                        </div>
                        <p className="text-red-600 h-[20px]">{signupErrorMessage.username}</p>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="email">Email:</label>
                        <div className="w-[255px] h-[35px] rounded-[5px] text-form-text px-2 bg-form-input flex items-center
                        sm:w-[300px]">
                            <input type="email" placeholder="Email"  
                            id="email" value={signupEmail} onChange={signupEmailHandler} 
                            className="placeholder-form-text px-[9px] w-[225px] h-[35px] border-none outline-none
                            sm:w-[275px]"/>
                            <MdEmail className="text-lg"/>
                        </div>
                        <p className="text-red-600 h-[20px]">{signupErrorMessage.email}</p>
                    </div>
                            
                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="passwords">Password:</label>
                        <div className="w-[255px] h-[35px] rounded-[5px] text-form-text px-2 bg-form-input flex items-center
                        sm:w-[300px]" >
                            <input type={firstPasswordType} placeholder="Password" 
                            id="passwords" value={signupPassword} onChange={signupPasswordHandler} 
                            className="placeholder-form-text px-[9px] w-[225px] h-[35px] border-none outline-none 
                            sm:w-[275px]"/>
                            {firstPasswordType==='password' ? <IoEyeSharp className="text-lg" onClick={signupShowPassword}/>
                            :<FaEyeSlash onClick={againClosePassword} className="text-lg"/>}

                        </div>
                        <p className="text-red-600 h-[20px]">{signupErrorMessage.password}</p>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="confirm">Confirm Password:</label>
                        <div className="w-[255px] h-[35px] rounded-[5px] text-form-text px-2 bg-form-input flex items-center
                        sm:w-[300px]" >
                            <input type={confirmPasswordShow} placeholder="Confirm password" 
                            id="confirm" value={confirmSignup} onChange={signupConfirmHandle} 
                            className="placeholder-form-text px-[9px] w-[225px] h-[35px] border-none outline-none
                            sm:w-[275px]"/>
                            {confirmPasswordShow==='password' ? <IoEyeSharp className="text-lg" onClick={signupConfirmShowPassword}/>
                               :<FaEyeSlash onClick={confirmAgainClose} className="text-lg"/>}
                        </div>
                        <p className="text-red-600 h-[20px]">{signupErrorMessage.confirmPassword}</p>
                    </div>


                    <div className="flex justify-center">
                        <button className="w-[75px] h-[30px] border-none outline-none bg-form-text 
                        text-form-bg rounded-[5px] transition duration-300 ease-in-out hover:opacity-[0.8] cursor-pointer" 
		                onClick={SignUpValidation}>Sign Up</button>
                    </div>

                    <div className="flex justify-start align-center gap-2">
                        <p>you already have a account? <Link to='/login' className="font-semibold text-lg">login</Link></p>    
                    </div>
                            
                </form>     
            </section> 
        </>
    );
}

export default SignupForm;

