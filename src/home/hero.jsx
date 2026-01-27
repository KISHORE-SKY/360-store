import OfferFetchHook from './useFetchOffer.jsx'
function HeroSection() {
    return(
        <>
            <main className="pt-10 mt-10 bg-primary-bg text-primary-text">
                <section>
                    <div className='bg-primary-text text-primary-bg m-1 w-fit rounded-lg'>
                        <input type='search' placeholder='Search' 
                        className='bg-primary-text text-primary-bg w-[250px] outline-none px-[10px] rounded-2xl h-[37px]
                        placeholder:text-primary-bg'/>
                    </div>
                    
                </section>
                <section>
                    <OfferFetchHook />
                </section>
            </main>
        </>
    );
}

export default HeroSection;