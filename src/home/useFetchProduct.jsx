import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoaderProduct from '../assets/UIcomponents/productLoader';
import { FaCalendar } from "react-icons/fa";


function ProductionSection(){
    const [datas,setDatas]=useState([]);
    const [visibleProducts,setVisibleProducts]=useState([]);
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(true);
    const [error,setError]=useState('');

    const loaderRef=useRef(null);

    useEffect(()=>{
        async function productsHome() {
            const url=(`https://dummyjson.com/products`);
            try{
                const response=await fetch(url)
                if(!response.ok){
                    throw new Error(`couldn't fetch the products:${response.status}`);
                }
                const result=await response.json();
                setDatas(result.products);
                console.log(result);
                
                setVisibleProducts(result.products.slice(0,6));
                
            }
            catch(error){
                setError(error.message)
            }
        }
        productsHome();
    },[]);

    useEffect(()=>{
        if(page>1 && datas.length >0){
            const end=page*6;
            const nextBatch=datas.slice(0,end);
            setVisibleProducts(nextBatch);

            if(end >= datas.length){
                setHasMore(false);
            }
        }
    },[page,datas]);
   
    useEffect(()=>{
        if(!hasMore) return;

        const observer=new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                setPage((prev)=>prev+1);
            }
        },{threshold : 0.5});

        if(loaderRef.current){
            observer.observe(loaderRef.current);
        }

        return ()=> observer.disconnect();
    },[hasMore,datas]);

    return(
        <>
            <section className="grid grid-cols-1 justify-center pt-3 gap-6 sm:grid-cols-2 sm:items-center md:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.map(item=>(
                    <div key={item.id} className="grid grid-cols-[minmax(250px,275px)] justify-center items-center p-3 bg-primary-bg rounded-md text-primary-text h-auto sm:h-[425px]
                    hover:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] hover:translate-y-[-5px] transition-all duration-200 ease">
                        <div className="flex justify-center">
                            <Link to={`/products/${item.id}`}>
                                <img className="w-[225px] h-auto sm:w-[250px] sm:h-[250px]" src={item.images?.[0]} alt={item.title}/>
                            </Link>
                            
                        </div>
                        <div className="flex flex-col items-center text-center gap-1">
                            <div>
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                            </div>
                            <div>
                                <p className=" text-md lg:text-md">${item.price}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className=" text-md lg:text-md">{item.rating}</p>
                                <FaStar className="text-yellow-500 lg:text-md"/>
                            </div>
                            <div>
                                <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]"
                                >Add to cart</button>
                            </div>
                        </div>
                        
                    </div>
                ))}

                <div ref={loaderRef} className="py-10 text-center font-bold text-gray-500 flex flex-col items-center justify-center sm:col-span-2 md:col-span-2 lg:col-span-3">
                    {hasMore ? <LoaderProduct /> :   <div className="flex items-center gap-1">
                                                                <FaCalendar className="text-primary-text text-2xl"/>
                                                                <p className="text-primary-text text-lg">End of the products</p>
                                                            </div>}
                </div>
                
            </section>
        </>
    );
}


export default ProductionSection;