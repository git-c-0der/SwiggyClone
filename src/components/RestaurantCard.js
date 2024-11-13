import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResCard = (props) =>{
    const {
        cloudinaryImageId, 
        name,
        cuisines,
        avgRating
    } = props.resData?.info;
    console.log({props});
    const {loggedInUser} = useContext(UserContext);
    
    return (
        <div className="res-card m-4 p-4 w-[250px] h-[450px] bg-slate-100 hover:bg-slate-250">
            <img className="res-logo rounded-lg h-[250px] w-[200px] object-cover" src={CDN_URL + cloudinaryImageId} />
            <h3 className="py-1 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="font-bold">{avgRating} stars</h4>
            {/* <h4>User: {loggedInUser}</h4> */}
        </div>
    );
}

export const withPromotedLabel = (ResCard) =>{
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;