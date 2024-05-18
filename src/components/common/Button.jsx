// eslint-disable-next-line react/prop-types
const Button = ({ on_click_func, text = " ", disabled }) => {
  
  return (
    <>
      <button
        onClick={() => on_click_func()}
        disabled={!disabled}
        className={`py-4 px-10 rounded-full text-white mt-10 transition-all ${
          disabled
            ? "hover:bg-zinc-900 bg-blue-400 cursor-pointer"
            : "bg-gray-400"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
