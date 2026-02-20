import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../privateRouter/authendication/productSlice";
import NormalizeProducts from "../utils/normalizeApi";

function MainProducts(){
    const [product,setProduct]=useState(null);
    const [error,setError]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        async function productsSection(){
            const url=`https://dummyjson.com/products/${id}`;
            try{
                const response=await fetch(url)
                if(!response.ok){
                    throw new Error(`couldn't fetch products:${response.status}`)
                }
                const datas=await response.json();
                setProduct(datas);
            } catch(error){
                setError(error.message);
            }
        }
        productsSection();
    },[id])


    const navigate = useNavigate();
    const user = useSelector((state)=>state.auth.user);
    const dispatch=useDispatch();

    function handlerAddToCart() {
        if(!user){
            navigate("/login");
            return;
        }
        const normalize=NormalizeProducts(product);
        dispatch(addCart(normalize));
    }

    if (error) return <div className="text-white pt-20">Error: {error}</div>
    if (!product) return <div className="text-white pt-20">Loading Product...</div>

    return(
        <>

            <section className="p-3 py-6 pb-5 pt-[90px] grid grid-cols-[minmax(275px,300px)] gap-1 justify-center text-center bg-product-bg text-primary-text
            sm:grid-cols-[minmax(350px,400px)] md:grid-cols-[minmax(275px,300px)_minmax(275px,300px)] md:text-left
            lg:grid-cols-[minmax(400px,475px)_minmax(350px,375px)] lg:gap-[0px]">


                <div className="flex flex-col gap-1 md:order-2 md:justify-center md:items-start">
                    <div>
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <h2 className="font-semibold text-lg lg:font-bold">Brand:</h2>
                            <h1 className="lg:text-[18px]">{product?.brand}</h1>
                        </div>
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <h2 className="font-semibold text-lg lg:font-bold">Name:</h2>
                            <h1 className="lg:text-[18px]">{product?.title}</h1>
                        </div>
                        
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <h2 className="font-semibold text-lg lg:font-bold">Price:</h2>
                            <p className="lg:text-[18px]">${product?.price}</p>
                        </div>
                        
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <p className="lg:text-[18px]">{product?.rating}</p>
                            <FaStar className="text-yellow-500 text-mdlg:text-[18px]"/>
                        </div>
                        
                    </div>
                    <div className="flex flex-col justify-center gap-1 md:justify-start">
                        <h2 className="font-semibold text-md lg:text-lg lg:font-bold">About Product:</h2>
                        <p className="lg:text-[18px]">{product?.description}</p>
                    </div>
                    <div>
                        
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <p className="font-semibold text-md lg:text-lg lg:font-bold">Available:</p>
                            <p className="lg:text-[18px]">{product?.availabilityStatus}</p>
                            <p className="lg:text-[18px]">{product?.stock}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-1">
                            <h2 className="font-semibold text-md lg:text-lg lg:font-bold">Warrenty:</h2>
                            <p className="lg:text-[18px]">{product?.warrantyInformation}</p>
                        </div>
                        <p className="text-lg ">{product?.returnPolicy}</p>
                    </div>

                     <div className="flex flex-col items-center pt-3 text-center gap-1 md:text-left md:items-start">
                    <h1 className="font-semibold text-md lg:text-lg lg:font-bold">Product Reviews:</h1>
                     {product?.reviews.map((review,index)=>(
                        <div key={index}>
                            <div className="flex items-center gap-1 md:items-start">
                                <p className="font-semibold text-md lg:text-lg lg:font-bold">Comment:</p>
                                <p className="lg:text-[18px]">{review.comment}</p>
                            </div>
                            <div className="flex items-center gap-1 md:items-start">
                                <p className="font-semibold text-md lg:text-lg lg:font-bold">Buyer rating:</p>
                                <div className="flex items-center">
                                    <p className="lg:text-[18px]">{review.rating}</p>
                                    <FaStar className="text-yellow-500 text-mdlg:text-[18px]"/>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex items-center gap-1 md:items-start">
                                    <p className="font-semibold text-md lg:text-lg lg:font-bold">Comment by:</p>
                                    <p className="lg:text-[18px]">{review.reviewerName}</p>
                                </div>
                                
                            </div>
                            
                        </div>
                   ))}
                </div>
                    
                </div>

                
                <div className="flex flex-col gap-2 items-center md:order-1 ">
                    <img className="w-[290px] h-auto sm:w-[350px] lg:w-[450px]" src={product.images?.[0]} alt={product.title}/>
                    <div className="flex justify-center gap-2">
                        <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]"
                        onClick={handlerAddToCart}>Add to cart</button>
                        <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]">Buy now</button>
                    </div>
                </div>   
                
            </section>
        </>
    );
}

export default MainProducts;
