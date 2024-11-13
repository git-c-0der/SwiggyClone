import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);
    const [showItems, setShowItems] = useState(false);
    const [showIndex, setShowIndex] = useState(0);

    if(resMenu.length === 0) return <Shimmer />;

    const resInfo = resMenu?.cards[2]?.card?.card?.info;
    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        item => (item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );

    const handleClick = () => {setShowItems(!showItems);}

    return (
        <div className="text-center">
            <div className="p-4 m-4">
                <h1 className="font-bold text-2xl my-4">{resInfo.name}  - {resInfo.avgRating}</h1>
                <h3>{resInfo.cuisines.join(", ")}</h3>
            </div>
            {categories.map((category, idx) => 
                // Controlled Component
                // Lifting the state up
                (<RestaurantCategory showItems={idx===showIndex && true} data={category.card.card} setShowIndex={setShowIndex} idx={idx}/>))}
        </div>
    );
};

export default ResMenu;