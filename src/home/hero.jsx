import OfferFetchHook from './useFetchOffer.jsx';
//import { FaSearch } from "react-icons/fa";
import ProductionSection from './useFetchProduct';
import { FaMicrophoneAlt } from "react-icons/fa";

function HeroSection() {

    return(
        <>
            <main className="pt-10 mt-10 md:mt-0 md:pt-8 text-primary-text mb-[40px]">

                <section className='pl-1 flex items-center gap-[2px] md:hidden'>
                    <div className='bg-primary-text text-primary-bg m-1 w-fit rounded-lg'>
                        <input type='search' placeholder='Search' name='searches' id='searches'
                        className='bg-primary-text text-primary-bg w-[250px] outline-none px-[10px] rounded-2xl h-[37px]
                        placeholder:text-primary-bg 
                        sm:w-[500px] lg:w-[650px]'/>
                    </div>
                    <FaMicrophoneAlt className='md:hidden inline-block text-lg text-primary-text cursor-pointer'/>
                </section>

                <section>
                    <OfferFetchHook />
                </section>

                <section className='mt-4 pt-7 flex flex-col items-center'>
                    <h1 className='text-lg font-bold lg:text-2xl md:text-2xl'>Products</h1>
                    <div >
                        <ProductionSection/>
                    </div>
                    
                </section>
            </main>
        </>
    );
}

export default HeroSection;