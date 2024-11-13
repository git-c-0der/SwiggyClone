import { useState, useEffect } from "react";
import { RES_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState([]);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    }

    return resMenu;
}

export default useRestaurantMenu;