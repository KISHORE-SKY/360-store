import { FaUserAstronaut } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { removeFromCart } from "./authendication/productSlice";
import { useNavigate } from "react-router-dom";


function Dashboard(){

    const username=localStorage.getItem("user");
    const convertedUsername=JSON.parse(username);

    const carts=localStorage.getItem("cart");
    const convertedItems=JSON.parse(carts);

    const productTotal=useSelector((state)=>state.product.totalPrice);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handleRemove(id){
        dispatch(removeFromCart(id));
        //navigate(0);
    }
    

    return(
        <>
            <section className="pt-[90px] pb-8 bg-bg-section grid grid-cols-1 gap-4 min-h-screen">
                <div className="flex flex-col gap-3 sm:items-center sm:justify-between sm:flex-row p-2 sm:px-5">
                    <div className="flex items-center gap-2">
                        <FaUserAstronaut className="text-2xl"/>
                        <h2>Hi <span className="text-2xl font-semibold text-primary-text">{convertedUsername.username}</span></h2>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <FaMoneyCheckAlt className="text-[20px] text-primary-text"/>
                            <p className="font-semibold text-lg">Total Price</p>
                        </div>
                        
                        <p className="font-bold text-primary-text text-2xl">${productTotal}</p>
                    </div>
                </div>
                <div className="grid grid-cols-[minmax(290px,300px)] justify-center gap-4 p-2 sm:grid-cols-[minmax(350px,400px)]
                md:grid-cols-[minmax(290px,300px)_minmax(290px,300px)] lg:grid-cols-[repeat(auto-fit,minmax(350px,375px))]">
                    {convertedItems.map((items)=>(
                    <div className="bg-primary-bg p-3 h-[425px] text-primary-text flex flex-col gap-1 items-center justify-center
                     p-2 rounded-lg hover:shadow-[0px_3px_8px_1px_rgba(0,0,0,0.2)] hover:scale-100.3 transition-all duration-170 ease-out" key={items.id}>
                        <img src={items.image} alt={items.title} loading="lazy" className="w-[150px] h-auto sm:w-[200px] "/>
                        <h1>{items?.title}</h1>
                        <p className="font-semibold text-lg">${items?.price}</p>

                        <button className="bg-primary-text cursor-pointer text-primary-bg p-1 pr-2 pl-2 rounded-[20px]"
                        onClick={()=>handleRemove(items.id)}>remove cart</button>
                    </div>
                   
                ))}
                </div>
            </section>
        </>
    );
}


export default Dashboard;