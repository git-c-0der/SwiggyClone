import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const items = useSelector((store)=>store.cart.items);

    return (
        <div className="text-center m-2 p-2">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto p-4">
                <button onClick={handleClearCart} className="bg-black text-white m-2 p-2">
                    Clear Cart
                </button>
                {items.length===0 && <h1>Your cart is Empty. Order something Delicious.</h1>}
                <ListItem data={items} />
            </div>
        </div>
    );
};

export default Cart;