import OfferFetchHook from './useFetchOffer.jsx';
import { FaSearch } from "react-icons/fa";
import ProductionSection from './useFetchProduct';
import { FaShoppingBag } from "react-icons/fa";
import Search from '../productDetails/searchFilter'

function HeroSection() {


    return(
        <>
            <main className="pt-10 mt-10 md:mt-0 md:pt-8 text-primary-text mb-[40px]">

                <section className='pl-1 flex items-center justify-center gap-[2px]'>
                   <Search />             
                </section>

                <section className='mt-4'>
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