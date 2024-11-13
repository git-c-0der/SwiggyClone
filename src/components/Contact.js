const Contact = () => {
    return (
        <div className="contact text-center">
            <div className="font-bold text-2xl m-4 p-4">
                <h1>Contact Us Page</h1>
                <h3 className="text-lg">namastefood@gmail.com</h3>
            </div>
            
            <form className="w-6/12 m-auto">
                <input placeholder="Name" type="text" className="m-auto block border border-black p-2 my-4"/>
                <input placeholder="Message" type="text" className="block border border-black m-auto my-4 p-2" />
                <button className="block border-black border text-white bg-black m-auto p-2 my-4 rounded-lg">Submit</button>

            </form>
        </div>
    );
};

export default Contact;