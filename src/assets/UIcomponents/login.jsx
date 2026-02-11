
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import {Link} from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";


function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        setType('text');
    }
    function againHidePassword(){
        setType('password');
    }

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword('');
        }
    }

    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    return(
        <>
            <section className="grid grid-cols-[minmax(290px,300px)] justify-center py-9 pt-[95px] px-1
            sm:grid-cols-[minmax(340px,365px)] md:grid-cols-[minmax(350px,375px)] gap-3">

                <h2 className="text-form-text font-bold text-2xl text-center h-fit">LOGIN</h2>

                <form className="flex flex-col gap-[10px] items-center bg-form-bg text-form-text p-[20px] rounded-[10px] w-[290px]
                shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)]  sm:w-[335px] md:w-[350px] md:m-2 h-fit">
                    <div className="flex flex-col gap-[4px]">                                
                    <label htmlFor="logusername" className="md:font-semibold">Username:</label>
                        <div className="w-[250px] h-[37px] flex items-center rounded-[10px] px-2 bg-form-input text-form-text 
                        ">
                            <input type="text" placeholder="username"
                            value={loginUsername}
                            onChange={loginUsernameHandler} id="logusername" className="placeholder-form-text px-1 w-[265px] h-[35px] border-none outline-none"/>
                            <RiUserFill className="text-lg"/>
                        </div>
                        <p className="text-red-600 h-[20px] text-md">{loginErrorUser}</p>
                    </div>

                    <div className="flex flex-col gap-[4px] ">
                        <label htmlFor="logPassword" className="md:font-semibold">Password:</label>
                        <div className="w-[250px] h-[37px] rounded-[10px] flex items-center px-2 bg-form-input text-form-text">
                            <input type={typeInput} placeholder="password"
                            value={loginPassword}
                            onChange={loginPasswordHandler} id="logPassword" className="placeholder-form-text px-1 w-[265px] h-[35px] border-none outline-none"/>
                            {typeInput==='password' ? <IoEyeSharp className="text-lg" onClick={loginShowPassword}/>
                            :<FaEyeSlash className="text-lg" onClick={againHidePassword}/>}
                        </div>
                        <p className="text-red-600 h-[20px]">{loginErrorPassword}</p>
                    </div>
                            
                    <div>
                        <button className="w-[75px] h-[30px] border-none outline-none bg-primary-text text-primary-bg rounded-[5px] 
                        transition duration-300 ease-in-out hover:opacity-[0.8] cursor-pointer" 
                        onClick={LoginHandler}>Login</button>
                    </div>

                    <div className="flex-col items-end w-[250px] mb-2">
                        <p className="text-right">you didn't have account? <Link to='/signup' className="font-semibold text-lg">signup</Link></p>
                    </div>
                </form>
            </section>
        </>
    );
}
export default Login;  

