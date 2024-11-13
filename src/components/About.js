
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parend Class Mounted");
    }

    render(){
        console.log("Parent Render");
        return (
            <div className="about">
                <h1>About Us</h1>
                <h2>We are Namaste Food and are here to help you fulfill your cravings.</h2>
                <h3>Username: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => <span>{loggedInUser}</span>}
                    </UserContext.Consumer>
                </h3>
                <UserClass data={{
                    fname: "Abhishek Maurya",
                    loc: "New Delhi",
                    role: "Class Based Component Developer",
                }}/>
            </div>

        );
    };
};

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             <h2>We are Namaste Food and are here to help you fulfill your cravings.</h2>
//             {/* <User data={{
//                 fname: "Abhishek Maurya",
//                 loc: "New Delhi",
//                 role: "Functional Component Developer",
//             }} /> */}
//             <UserClass data={{
//                 fname: "Abhishek Maurya",
//                 loc: "New Delhi",
//                 role: "Class Based Component Developer",
//             }}/>

//         </div>
//     );
// };

export default About;