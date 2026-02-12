import OfferFetchHook from './useFetchOffer.jsx';
//import { FaSearch } from "react-icons/fa";
import ProductionSection from './useFetchProduct';
import { FaShoppingBag } from "react-icons/fa";
import Search from '../productDetails/searchFilter'

function HeroSection() {


    return(
        <>
            <main className="pt-[100px] pb-[50px] md:pt-[70px] pb-[70px] w-full bg-bg-section text-primary-text">

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