import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Search() {

    const [inputValue,setInputValue]=useState('');
    const [error,setError]=useState('');
    const [data,setData]=useState([]);
    const[hovered,setHovered]=useState('not_hovered');    

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
                setData(result.products);        
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
    
    const filteredProducts = data.filter(item=>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    
    const mouseOverHandler=()=>{
        setHovered('yes_hovered');
    }
    const mouseOutHandler=()=>{
        setHovered('not_hovered');
    }

    const clickHandler=()=>{
        setHovered('yes_hovered');
    }

    return(
        <>
            <div className='flex items-center flex-col gap-1 w-[250px] reletive'
                onMouseEnter={mouseOverHandler}
                onMouseLeave={mouseOutHandler}
                onClick={clickHandler}
                    
                    >
                <div className='flex items-center gap-1 px-2 py-1 bg-primary-text text-primary-bg w-[250px] rounded-2xl h-[37px]
                    sm:w-[500px] lg:w-[650px]'>
                    <label htmlFor="searches" className="text-primary-bg"><FaSearch /></label>
                    <input type='search' placeholder='Search' name='searches' id='searches' 
                    value={inputValue} onChange={inputHandler}
                     
                    className='bg-primary-text text-primary-bg w-[250px] outline-none rounded-2xl h-[37px]
                    placeholder:text-primary-bg 
                    sm:w-[500px] lg:w-[650px]'
                    />
                    
                </div>

                {error && <p>{error}</p>}

                {hovered==='yes_hovered' && <div className="border border-primary-text border-solid bg-primary-bg p-2 rounded-[20px] overflow-y-hidden h-[80px] flex flex-col items-center
                absolute z-[10000] top-[75px]">
                    {filteredProducts.map(product=>(
                    <Link to={`/productDetails/products${product.id}`} key={product.id}>
                        <div className="my-1">
                            <p>{product.title}</p>
                        </div>
                    </Link>
                    ))}
                </div>}
              
                                    
            </div>
        </>
    );
}

export default Search;