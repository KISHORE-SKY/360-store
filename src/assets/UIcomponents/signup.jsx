import { useState } from "react";
//import { LuCopy } from "react-icons/lu";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

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

    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }

    return(
        <>
            <form className="flex flex-col gap-[10px] align-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="name">Username:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] px-[9px] 
                    placeholder-[#0B0729] border-none outline-none">
                        <input type="text" placeholder="Username"  
                        id="name" value={signUpusername} onChange={signupUsernameHandler}/>
                        <RiUserFill />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.username}</p>
                </div>

                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="email">Email:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-primary-bg bg-primary-text px-[9px] 
                     flex items-center justify-between">
                        <input type="email" placeholder="Email"  
                        id="email" value={signupEmail} onChange={signupEmailHandler} className="placeholder-primary-bg border-none outline-none w-[265px]"/>
                        <MdEmail />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.email}</p>
                </div>
                            
                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="passwords">Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] px-[9px] 
                    placeholder-[#0B0729] border-none outline-none" >
                        <input type="password" placeholder="Password" 
                        id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>
                        <IoEyeSharp />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.password}</p>
                </div>

                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] px-[9px] 
                    placeholder-[#0B0729] border-none outline-none" >
                        <input type="password" placeholder="Confirm password" 
                        id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>
                        <IoEyeSharp />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.confirmPassword}</p>
                </div>

                <div className="flex justify-start align-center mr-[50px]">
                    <input type="checkbox" name="termsCondition" className="cursor-pointer accent-[#0B0729]" required/>
                    <label htmlFor="termsCondition">
                        I agree to the Terms & Privacy Policy
                    </label>
                </div>

                <div>
                    <button className="w-[75px] h-[30px] border-none outline-none bg-[#0B0729] 
                    text-[#fff] rounded-[5px] transition duration-300 ease-in-out hover:opacity-[0.9] cursor-pointer" 
		            onClick={SignUpValidation}>Sign Up</button>
                </div>
                            
            </form>  
        </>
    );
}
export default SignupForm;

