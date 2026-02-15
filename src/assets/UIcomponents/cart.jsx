import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


function CartComponent() {

    const cartItems=useSelector(state=>state.product.cartItems);


    return(
        <>
            <div className="flex text-lg text-text-navbar cursor-pointer hover:opacity-50 w-[50px]">
                <FaShoppingCart />
                <sup className="text-sm">{cartItems.length}</sup>
            </div>
        </>
    );
}

export default CartComponent;