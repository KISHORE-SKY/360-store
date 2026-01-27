import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

function OfferFetchHook() {

    const [data,setData]=useState([]);
    const [errorState,setErrorState]=useState('');
    useEffect(()=>{
       async function offerFetch() {
         try{
            const response=await fetch(`https://fakestoreapi.com/products`)
            if(!response.ok){
                throw new Error(`couldn't fetch:${(response.status)}`)
            }
            const result = await response.json();
            setData(result);
            console.log(result);
        }
        catch(errorState){
            setErrorState(errorState.message);
        }
       }
       offerFetch();
    },[])
    return(
        <>
            {data.map(item=>(
                <div key={item.id} style={{backgroundImage: `url(${item.image})`,backgroundRepeat:'no-repeat',
                backgroundPosition:'center'}}
                className="w-full h-[75vh] bg-primary-bg text-primary-text p-1 mt-4">

                    <div>
                        <h1 className="text-2xl">{item.title}</h1>
                        <p className="text-lg">${item.price}</p>
                    <div>
                        <p>Remaining Stock:</p>
                        <p className="text-lg">{item.rating.count}</p>
                    </div>
                    <div>
                        <p>Users Rating:</p>
                        <div className="flex items-center gap-1">
                            <p className="text-lg">{item.rating.rate}</p>
                            <FaStar />
                        </div>
                    </div>
                    </div>
                    
                </div>  
            ))}
        </>
    );
}

export default OfferFetchHook;