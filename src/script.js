import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
// import Grocery from "./components/Grocery";

import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState("Default User");

    useEffect(()=>{
        // After fetching data from some API.
        const data = {
            name: "Abhishek Maurya",
        }

        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading ....</h1>}>
                    <Grocery />
                    </Suspense>
            },
            {
                path: '/cart',
                element: <Cart />,

            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu />,
            },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

