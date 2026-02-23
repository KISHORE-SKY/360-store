import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import {SwiperSlide,Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

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
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >

            {data.map(item=>(
                <SwiperSlide>
                    <div key={item.id} 
                        className="w-full h-[700px] text-primary-text p-2 mt-4 
                         bg-primary-bg grid grid-cols-1 gap-1 justify-center
                         md:p-3 md:pt-4 md:pb-4 md:grid-cols-2 md:h-[70vh]" >
                            <section className="flex flex-col md:items-center md:self-center pt-7">
                                <div className="md:w-[265px]">
                                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                                </div>
                                    <p className="md:text-lg md:w-[265px]">Offer Price:</p>
                                    <p className="offerProducts-details">${item.price}</p>
                                    <p className="md:text-lg md:w-[265px]">Customers Rating:</p>
                                    <div className="flex items-center gap-1 md:w-[265px] ">
                                        <p className="text-lg font-semibold">{item.rating.rate}</p>
                                        <FaStar className="text-yellow-500 text-lg" />
                                    </div>
                                    <button className="mt-6 w-fit self-start md:self-center bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]">
                                        <Link to={`/offerProducts/${item.id}`}>Explore Product</Link>
                                    </button>
                                    
                                
                            </section>
                            <section className="flex justify-center md:items-center">
                                <Link to={`/offerProducts/${item.id}`} className="w-fit self-center">
                                    <img src={item.image} alt={item.title} loading="lazy" className="max-w-[300px] h-[280px] self-center md:h-[325px] md:max-w-[90%] cursor-pointer"/>
                                </Link>
                                
                            </section>
                    
                        </div>  
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default OfferFetchHook;