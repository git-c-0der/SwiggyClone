import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy",
            }
        };
        console.log("Child Constructor");
    }

    async componentDidMount(){
        console.log("Child Class Mounted");

        const data = await fetch("https://api.github.com/users/git-c-0der");
        const json = await data.json();

        console.log(json);
        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component is Unmounted");
    }

    render(){
        console.log("Child Render");
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            
            <div className="user-card">
                <img src={avatar_url} className="user-logo"/>
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
        );
    }
}

export default UserClass;