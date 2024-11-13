import { useDispatch } from "react-redux";
import { DISH_IMAGE_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ListItem = ({data}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };


    return (
        <div>            
            {data.map((dish) => (
                    <div className="flex border-b-2 m-4 border-black">
                        <div className="w-9/12 p-4 text-left">    
                            <h1 className="text-lg">{dish?.card?.info?.name}</h1>
                            <h1 className="text-lg">₹ {dish?.card?.info?.price/100 | dish?.card?.info?.defaultPrice/100}</h1>
                            <h1 className="text-sm">{dish?.card?.info?.description}</h1>
                        </div>
                        <div className="py-2 w-3/12">
                            <div className="absolute">
                                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddItem(dish)}>
                                    Add +
                                </button>
                            </div>
                            <img src={DISH_IMAGE_URL + dish?.card?.info?.imageId}/>
                        </div>
                    </div>
                )
            )
        }
        </div>        
    )
}

export default ListItem;