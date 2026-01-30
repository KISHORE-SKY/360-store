import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function OfferDetails() {

    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [error,setError]=useState('');
   useEffect(()=>{
    async function productHandler() {
        const url=`https://fakestoreapi.com/products/${id}`;
        try{
            const response=await fetch(url)
            if(!response.ok){
                throw new Error(`couldn't fetch products:${response.status}`)
            }
            const result=await response.json();
            setProduct(result);
        }
        catch(error){
            setError(error.message);
        }
    }
    productHandler();
   },[id])

//    if (error) return <div className="text-white pt-20">Error: {error}</div>;
//     if (!product) return <div className="text-white pt-20">Loading Product...</div>;
   return(
    <>
        
            <section className="pt-10 mt-10 p-2 pb-4 bg-primary-bg text-primary-text
            grid grid-cols-1 justify-center gap-3 md:grid-cols-[minmax(300px,500px)_minmax(300px,350px)] h-auto">
                
                <div className="flex flex-col gap-1 sm:items-center md:justify-center md:items-start md:order-2">
                    <div className="w-auto sm:w-[300px] md:w-auto">
                        <p className="font-bold text-md lg:text-2xl">Type:</p>
                        <h2 className="font-semibold lg:text-xl">{product.category}</h2>
                    </div>
                    <div className="w-auto sm:w-[300px] md:w-auto">
                        <h1 className="text-md lg:text-lg">{product.title}</h1>
                    </div>
                    <div className="w-auto sm:w-[300px] md:w-auto">
                        <p className="font-semibold text-md lg:text-xl">${product.price}</p>   
                    </div>
                    <div className="w-auto sm:w-[300px] md:w-auto">
                        <p className="font-bold text-md lg:text-2xl">Product About:</p>
                        <p className="lg:text-lg">{product.description}</p>
                    </div>
                    
                    <div className="w-auto sm:w-[300px] md:w-auto">
                        <p className="font-bold text-md lg:text-2xl">Available count:</p>
                        <p className="font-semibold lg:text-xl">{product.rating.count}</p>
                    </div>          
                    
                    <div className="flex flex-col sm:w-[300px] md:w-auto">
                        <p className="font-bold text-md lg:text-2xl">Product rating:</p>
                        <div className="flex items-center gap-1">
                            <p className="font-semibold lg:text-xl">{product.rating.rate}</p>
                            <FaStar className="text-yellow-500 lg:text-xl"/>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col justify-center gap-3 items-center md:order-1">
                    <img className="max-w-[85%] h-auto md:h-[400px] lg:h-[500px]" src={product.image}/>

                    <div className="flex items-center gap-2">
                        <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]">Add to cart</button>
                        <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]">Buy now</button>
                    </div>
                </div>
                
            </section>
    
    </>
   );
}


export default OfferDetails;