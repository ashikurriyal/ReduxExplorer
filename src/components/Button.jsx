/* eslint-disable react/prop-types */

const Button = ({ children, type, handle }) => {
  const style =
    type === "danger"
      ? "bg-red-500 text-white px-3 py-2 rounded-lg shadow"
      : "bg-green-500 text-white px-3 py-2 rounded-lg shadow"; // Fixed typo 'tex' to 'text'

  return (
    <div>
      <button className={style} onClick={handle}>
        {children}
      </button>
    </div>
  );
};

export default Button;
