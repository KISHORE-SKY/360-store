import { createContext, useState } from "react";

const ThemeContext=createContext();

function ThemeProvider({children}) {
    const [theme,setTheme]=useState(()=>{
        const saved = localStorage.getItem('theme');
        if(saved) return saved;
        //return window matchMedia('()')
    })
}