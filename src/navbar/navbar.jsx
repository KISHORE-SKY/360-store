import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import OutsideClickHandler from 'react-outside-click-handler';

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

    function outsideObserver() {
        if(hambergClicked==='yes'){
            setHambergClicked('no');
        }
    }

    //user dropdown menu
    const options=[
        {label:'Signup',path:'/assets/UIcomponents/signup'},
        {label:'Login',path:'/assets/UIcomponents/login'},
        {label:'Logout'}
    ]
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

        const navigate=useNavigate();
        const handleClickItem=()=>{
            handleClose();
            navigate(path)
        }
    
    return(
        <>
            <header className="p-1 pt-4 pr-3 pl-3 bg-green-navbar text-text-navbar z-[99999] overflow-hidden 
            fixed top-0 left-0 w-full md:flex items-center justify-between md:pt-0 md:pr-4 md:pl:4">
                <nav className={"flex flex-row items-center justify-between gap-1 lg:gap-2"}>
                    <div>
                        <h1 className="m-0 text-[20px] tracking-wide font-bold md:font-semibold lg:font-bold">360-Store</h1>
                    </div>
                    <OutsideClickHandler onOutsideClick={outsideObserver}>
                    <div className="md:hidden">
                        <MdMenu onClick={hambergHandler} className="cursor-pointer text-text-navbar text-2xl"/>
                    </div>
                    </OutsideClickHandler>

                    <div className="md:flex md:items-center hidden md:mt-[3px] md:flex md:items-center md:gap-1 hidden md:bg-text-navbar md:text-green-navbar md:px-[10px] md:rounded-md md:fit
                        text-green-navbar 
                        md:w-[300px] lg:w-[400px]">
                         
                       
                    </div>
                </nav>
                

                
                <ul className= {`flex flex-col gap-2 items-center p-2 pt-3 text-text-navbar transition-all duration-600 ease 
                ${hambergClicked==='no' ?
                 "pointer-events-none opacity-0 translate-y-[-100px] max-h-0 z-[-1]" : 
                 "pointer-events-auto opacity-100 translate-y-[0px] h-auto max-h-80 z-[1]"}}
                 md:flex md:flex-row md:gap-3 md:opacity-100 md:pointer-events-auto translate-y-[0px] md:static pt-2 
                 md:w-auto md:max-h-full text-[#f0edee] `}>
                    
                    <li><Link to='/' className="navbar-lists">Home</Link></li>
                    <li><a className="navbar-lists">Products</a></li>
                    <li><Link className="navbar-lists">Contact</Link></li>
                    <button className="button-navbar md:hidden" ><Link to="/assets/UIcomponents/signup">Signup</Link></button>
                    <button className="button-navbar md:hidden"><Link to="/assets/UIcomponents/login">Login</Link></button>
                    <button className="button-navbar md:hidden">Logout</button>
                    <div className="w-auto flex items-center">
                        <MdSunny className="text-2xl h-auto cursor-pointer"/>
                        <BsFillMoonStarsFill className="text-1xl h-auto cursor-pointer"/>
                    </div>
                    
                    
                    
                    <div className="hidden md:flex flex-col items-center gap-1 bg-green-navbar text-text-navbar">
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{padding:'0px'}}
                            disableRipple>
                            <FaUserCircle className="hidden md:inline-block md:text-text-navbar md:hover:opacity-50 md:text-lg"/>
                        </IconButton>
                        <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        disableScrollLock={true}
                        disablePadding={true}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: 'fit-content',
                                    backgroundColor:'#2C666E',
                                    color:'#f0edee',
                                    paddingTop:'10px'
                                },
                            },
                            list: {
                                'aria-labelledby': 'long-button',
                            },
                        }}
                    >
                    {options.map((option) => (
                        <MenuItem key={option.label} selected={option === 'Pyxis'} onClick={()=>handleClickItem(option.path)}
                        disableRipple sx={{"&:hover,.MuiMenu-list":{
                            backgroundColor:'#f0edee',
                            color:'#2C666E',
                            transition:'all 0.3s ease',
                            
                        },
                        }}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </Menu>
                </div>
   
                </ul>
                
            </header>
        </>
    );
}

export default NavBarSection;