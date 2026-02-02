import { useState } from "react";

function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text');
        }
        else{
          setType('password');
        }
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
            <form className="flex flex-col gap-[10px] align-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                <div className="flex flex-col gap-[4px]">                                
                <label htmlFor="logusername">Username:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] px-[9px] 
                    placeholder-[#0B0729] border-none outline-none">
                        <input type="text" placeholder="username"
                        value={loginUsername}
                        onChange={loginUsernameHandler} id="logusername"/>
                        <RiUserFill />
                    </div>
                    <p className="text-red-600 h-[20px]"
                    >{loginErrorUser}</p>
                </div>

                <div className="flex flex-col gap-[10px] align-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                    <label htmlFor="logPassword">Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] px-[9px] 
                    placeholder-[#0B0729] border-none outline-none">
                        <input type={typeInput} placeholder="password"
                        value={loginPassword}
                        onChange={loginPasswordHandler} id="logPassword"/>
                        <IoEyeSharp onClick={loginShowPassword}/>
                    </div>
                    <p className="text-red-600 h-[20px]">{loginErrorPassword}</p>
                </div>
                            
                <div>
                    <button className="w-[75px] h-[30px] border-none outline-none bg-[#0B0729] text-[#fff] rounded-[5px] 
                    transition duration-300 ease-in-out hover:opacity-[0.9] cursor-pointer" 
                    onClick={LoginHandler}>Login</button>
                </div>
            </form>
        </>
    );
}
export default Login;  

