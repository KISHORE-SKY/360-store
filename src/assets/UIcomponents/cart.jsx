import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartComponent() {

    const cartItems=useSelector(state=>state.product.cartItems);
    const user=useSelector(state=>state.auth.user);

   // const dispatch=useDispatch();
    const navigate=useNavigate();

    function adminPageHandler(){
        if(!user){
            navigate("/login");
            return;
        }
        navigate("/admin")
    }


    return(
        <>
            <div className="flex text-lg text-text-navbar cursor-pointer hover:opacity-50 w-[40px]" onClick={adminPageHandler}>
                <FaShoppingCart />
                <sup className="text-sm">{cartItems.length}</sup>
            </div>
        </>
    );
}

export default CartComponent;