import { FaUserAstronaut } from "react-icons/fa6";
import { useSelector } from "react-redux";
//import { cartClear } from "../privateRouter/authendication/productSlice";

function Dashboard(){

    const username=localStorage.getItem("user");
    const convertedUsername=JSON.parse(username);

    const carts=localStorage.getItem("cart");
    const convertedItems=JSON.parse(carts);

    const productTotal=useSelector((state)=>state.product.totalPrice);
    //const convertedPrice=JSON.parse(productTotal);

    return(
        <>
            <section className="pt-[90px] pb-8 bg-bg-section grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-2 sm:px-5">
                    <div className="flex items-center gap-2">
                        <FaUserAstronaut className="text-2xl"/>
                        <h2>Hi <span className="text-2xl font-semibold text-primary-text">{convertedUsername.username}</span></h2>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">Total Price</p>
                        <p className="font-bold text-primary-text text-2xl">${productTotal}</p>
                    </div>
                </div>
                <div className="grid grid-cols-[minmax(290px,300px)] justify-center gap-3 p-2 sm:grid-cols-[minmax(350px,400px)]
                md:grid-cols-[minmax(290px,300px)_minmax(290px,300px)] lg:grid-cols-[repeat(auto-fit,minmax(350px,375px))]">
                    {convertedItems.map((items)=>(
                    <div className="bg-primary-bg p-3 text-primary-text flex flex-col gap-1 items-center p-2" key={items.id}>
                        <img src={items?.images[0]} className="w-[150px] h-auto sm:w-[200px] "/>
                        <h1>{items?.title}</h1>
                        <p className="font-semibold text-lg">${items?.price}</p>
                    </div>
                ))}
                </div>
            </section>
        </>
    );
}


export default Dashboard;