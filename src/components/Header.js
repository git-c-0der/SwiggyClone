import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector,  } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("Header Re-rendered");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // This is the subscribing to our store
    const cart = useSelector((store)=>store.cart.items);
    // console.log(cart);
    
    return (
        <div className="header flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-40 logo" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center ">
                <ul className="flex py-2 mx-4 my-0">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cart.length} items)</Link></li>
                    <button className="login-btn" onClick={()=>{
                        if(btnName==="Login") setBtnName("LogOut");
                        else setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;