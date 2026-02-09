import OfferFetchHook from './useFetchOffer.jsx';
import { FaSearch } from "react-icons/fa";
import ProductionSection from './useFetchProduct';
import { FaShoppingBag } from "react-icons/fa";
import Search from '../productDetails/searchFilter'

function HeroSection() {


    return(
        <>
            <main className="pt-10 mt-10 md:mt-0 md:pt-8 text-primary-text mb-[40px]">

                <section className='pl-1 flex items-center gap-[2px] md:hidden'>

                    {/* <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1 px-2 py-1 bg-primary-text text-primary-bg w-[250px] rounded-2xl h-[37px]
                            sm:w-[500px] lg:w-[650px]'>
                            <FaSearch/>
                            <input type='search' placeholder='Search' name='searches' id='searches'
                            className='bg-primary-text text-primary-bg w-[250px] outline-none rounded-2xl h-[37px]
                            placeholder:text-primary-bg 
                            sm:w-[500px] lg:w-[650px]'/>
                        </div>
                        
                    </div> */}
                    <Search />
                                        
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