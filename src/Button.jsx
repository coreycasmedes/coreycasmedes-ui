

const Button = ({buttonText}) => {

    return (
        
        <button className="w-28 px-2 py-1 ml-4 border-2 bg-orange-300 rounded-md hover:bg-gray-300">
            {buttonText}
        </button>
        
    );
};

export default Button;