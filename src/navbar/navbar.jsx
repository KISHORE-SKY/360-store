import { useState } from "react";
import { Link } from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBarSection(){

    const [hambergClicked,setHambergClicked]=useState('no');

    function hambergHandler() {
        if(hambergClicked==='no'){
            setHambergClicked('yes');
        }
        else{
            setHambergClicked('no');
        }
    }
    return(
        <>
            <header className="p-1 pt-4 pr-3 pl-3 bg-green-navbar text-text-navbar overflow-hidden 
            fixed top-0 left-0 w-full md:flex items-center justify-between md:pt-1 pr-4 pl:4">
                <nav className={"flex flex-row items-center justify-between"}>
                    <div className="flex flex-col gap-0">
                        <h1 className="m-0 text-[20px] tracking-wide font-medium">360-Store</h1>
                    </div>
                    <div className="md:hidden">
                        <MdMenu onClick={hambergHandler} className="cursor-pointer text-text-navbar text-2xl"/>
                    </div>
                </nav>
                <ul className= {`flex flex-col gap-2 items-center p-2 pt-3 text-text-navbar transition-all duration-600 ease 
                
                ${hambergClicked==='no' ?
                 "pointer-events-none opacity-0 translate-y-[-100px] max-h-0 z-[-1]" : 
                 "pointer-events-auto opacity-100 translate-y-[0px] h-auto max-h-80 z-[1]"}}
                 md:flex md:flex-row md:gap-3 md:opacity-100 md:pointer-events-auto translate-y-[0px] md:static pt-2 md:w-auto md:max-h-full text-[#f0edee]`}>
                    
                    <li><Link to='/' className="decoration-none text-text-navbar">Home</Link></li>
                    <li><a className="decoration-none text-text-navbar cursor-pointer">Products</a></li>
                    <li><Link className="decoration-none text-text-navbar cursor-pointer">Contact</Link></li>
                    <button className="button-navbar">Signup</button>
                    <button className="button-navbar">Login</button>
                    <button className="button-navbar">Logout</button>
                    <div className="w-auto flex items-center">
                        <MdSunny className="text-2xl h-auto cursor-pointer"/>
                        <BsFillMoonStarsFill className="text-1xl h-auto cursor-pointer"/>
                    </div>
                </ul>
            
            </header>
        </>
    );
}

export default NavBarSection;