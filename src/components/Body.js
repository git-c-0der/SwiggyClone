import ResCard, { withPromotedLabel } from "./RestaurantCard";
import useRestaurantData from "../utils/useRestaurantData";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRes, setListOfRes] = useRestaurantData();
    const [filteredListOfRes, setFilteredListOfRes]=useRestaurantData();
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);


    if(onlineStatus===false){
        return <h1>Check your Internet Connection.</h1>
    }

    console.log(listOfRes);

    // Conditional Rendering
    if(listOfRes.length===0) return <Shimmer />;

    const ResCardPromoted = withPromotedLabel(ResCard);
    
    return (
        <div className="body">
            <div className="filter flex justify-between">
                <div className="search m-4 p-4">
                    <input data-testid="searchInput" type="text" className="search-box border-black border border-solid" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className="rounded-lg px-4 py-1 bg-green-100 m-4" onClick={()=>{                        
                        const filteredList = listOfRes.filter(
                            res=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                        setFilteredListOfRes(filteredList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>Username :</label>
                    <input className="border-black border mx-2 px-2" type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="rounded-lg filter-btn px-4 py-2 bg-gray-100" onClick={()=>{
                        const filteredList = listOfRes.filter(
                            res => res.info.avgRating>4.5
                        );
                        setFilteredListOfRes(filteredList);
                    }}>
                        Top Rated Restuarant
                    </button>
                </div>
                
            </div>

            <div className="res-cont flex flex-wrap">
                {
                    filteredListOfRes.map((restuarant)=>{
                        return <Link data-testid="resCard" className="card-link" key={restuarant.info.id} to={"/restaurants/" + restuarant.info.id}>
                            {(false ? <ResCardPromoted resData = {restuarant} />: <ResCard resData = {restuarant} />)}
                            </Link>;
                    })
                }           
            </div>
        </div>
    );
}

export default Body;