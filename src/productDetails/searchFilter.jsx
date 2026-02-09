import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {

    const [inputValue,setInputValue]=useState('');
    const [error,setError]=useState('');
    const [data,setData]=useState('');
    

    useEffect(()=>{
        async function searchProducts() {
            const url=(`https://dummyjson.com/products?q=${inputValue}`);

            try{
                const response=await fetch(url)
                if(!response.ok){
                    throw new Error(`couln't search the product ${response.status}`) 
                }
                const result=await response.json();
                console.log(result);
                setData(result);        
            }
            catch(error){
                setError(error.message);
            }
        }
        searchProducts();
    },[inputValue])

    function inputHandler(event){
        setInputValue(event.target.value);
        console.log(inputValue);
        
    }

    return(
        <>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1 px-2 py-1 bg-primary-text text-primary-bg w-[250px] rounded-2xl h-[37px]
                    sm:w-[500px] lg:w-[650px]'>
                    <label htmlFor="searches" className="text-primary-bg"><FaSearch /></label>
                    <input type='search' placeholder='Search' name='searches' id='searches' 
                    value={inputValue} onChange={inputHandler}
                    className='bg-primary-text text-primary-bg w-[250px] outline-none rounded-2xl h-[37px]
                    placeholder:text-primary-bg 
                    sm:w-[500px] lg:w-[650px]'/>
                    
                </div>
                <div>
                    <button className="text-sm bg-primary-text text-primary-bg p-1 rounded-md border-none outline-none">search</button> 
                </div>
                                    
            </div>
        </>
    );
}

export default Search;