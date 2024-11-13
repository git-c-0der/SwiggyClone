import { useState } from "react";
import ListItem from "./ListItem";

const RestaurantCategory = ({data, showItems, idx, setShowIndex}) => {
    const handleClick = () => {
        (showItems===true ? setShowIndex(-1): setShowIndex(idx))
    }

    return (
            <div key={data?.title} className="bg-gray-100 p-4 w-6/12 mx-auto my-4 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards.length})</span>
                    <span>{"⬇️"}</span>
                </div>
                {showItems && <ListItem data={data?.itemCards} />}
            </div>
    )
}

export default RestaurantCategory;