import { SWIGGY_URL } from "../utils/constants";
import { useState, useEffect } from "react";

// Using React Hooks to create a State variable.
// const [listOfRes, setListOfRes] = useState(resList);

// Now we will be loading our website from zero and as soon as the data 
// from the API call will be available page will be populated


const useRestaurantData = () => {
    const [listOfRes, setListOfRes] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // Optional Chaining Considered as a Good Practice
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [listOfRes, setListOfRes];
}

export default useRestaurantData;