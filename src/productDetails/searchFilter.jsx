import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";


function Search() {

    const [inputValue,setInputValue]=useState("");
    const [error,setError]=useState('');
    const [data,setData]=useState([]); 
    const wrapperRef=useRef(null);  
    const [isTouch,setIsTouch] = useState(false);
    const [debouncing,setDebouncing]=useState(inputValue);
    

     useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncing(inputValue);
        },500);

        return ()=> clearTimeout(timer);
    },[inputValue]);

    useEffect(()=>{
        async function searchProducts() {

            if(!debouncing.trim()){
                setData([]);
                return;
            }

            const url=(`https://dummyjson.com/products?q=${debouncing}`);

            try{
                const response=await fetch(url)
                if(!response.ok){
                    throw new Error(`couln't search the product ${response.status}`) 
                }
                const result=await response.json();
                console.log(result);
                setData(result.products);        
            }
            catch(error){
                setError(error.message);
            }
        }
        searchProducts();
    },[debouncing])
   

    const [filteredProducts,setFilteredProducts]=useState(data);
    
        useEffect(()=>{
            setFilteredProducts(data.filter(item=>
                item.title.toLowerCase().includes(debouncing.toLowerCase())
            ))
        },[data,debouncing])    

    function clickHandler(){
        setIsTouch(false)
    }
    

    return(
        <>
             
            <div className='flex items-center flex-col gap-1 w-[250px] reletive'
                ref={wrapperRef}
                onClick={() => setIsTouch(true)}
                >
                <OutsideClickHandler onOutsideClick={clickHandler}>
                <div className='flex items-center gap-1 px-2 py-1 bg-primary-text text-primary-bg w-[250px] rounded-2xl h-[37px]
                     sm:mt-4 md:mt-7 sm:w-[400px] lg:w-[455px]'>
                    <label htmlFor="searches" className="text-primary-bg"><FaSearch /></label>
                    
                    <input type='search' placeholder='Search' name='searches' id='searches' 
                    value={inputValue} onChange={(e)=>{setInputValue(e.target.value)
                        console.log(e.target.value);
                    }}
                    
                    className='bg-primary-text text-primary-bg w-[250px] outline-none rounded-2xl h-[37px]
                    placeholder:text-primary-bg 
                    sm:w-[400px] lg:w-[455px]'
                    />
                    
                </div>
                
                
                {isTouch && 
                
                <div className="border border-primary-text border-solid bg-primary-bg p-2 rounded-[20px] overflow-y-hidden h-[80px] w-[250px] flex flex-col
                 items-center absolute z-[10000] top-[145px] sm:top-[160px] sm:w-[400px] lg:w-[455px] md:top-[140px]">
                    
                   {inputValue && filteredProducts.length === 0 && (
                    <p>Product not available</p>
                    )}
                    {debouncing.length === 0 && <p>search the products...</p>}

                    {filteredProducts.map(item=>(
                    <Link to={`/products/${item.id}`} key={item.id}>
                        <div className="my-1">
                            <p>{item.title}</p>
                        </div>
                    </Link>
                    ))}
                    
                </div>
                
                }
                </OutsideClickHandler>  
                
                
            </div>
                       
        </>
    );
}

export default Search;