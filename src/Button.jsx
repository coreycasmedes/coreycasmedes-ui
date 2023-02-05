

const Button = ({buttonText}) => {

    return (
        
        <button className="w-28 px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300">
            {buttonText}
        </button>
        
    );
};

export default Button;