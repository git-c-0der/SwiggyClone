import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error">
            <h1>It's not you it's us.</h1>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    );
};

export default Error;