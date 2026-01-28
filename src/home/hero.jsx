import OfferFetchHook from './useFetchOffer.jsx';
import { FaSearch } from "react-icons/fa";
function HeroSection() {
    return(
        <>
            <main className="pt-10 mt-10 md:mt-7 text-primary-text">
                <section className='pl-1 flex items-center gap-1'>
                    <div className='bg-primary-text text-primary-bg m-1 w-fit rounded-lg'>
                        <input type='search' placeholder='Search' name='searches' id='searches'
                        className='bg-primary-text text-primary-bg w-[250px] outline-none px-[10px] rounded-2xl h-[37px]
                        placeholder:text-primary-bg 
                        sm:w-[500px] lg:w-[650px]'/>
                    </div>
                    <label htmlFor='searches'><FaSearch className='hidden sm:inline-block sm:text-lg sm:text-primary-text sm:cursor-pointer'/></label>
                    
                </section>
                <section>
                    <OfferFetchHook />
                </section>
            </main>
        </>
    );
}

export default HeroSection;