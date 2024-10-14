/* eslint-disable react/prop-types */
function Operations({ onClick }) {
  const operations = ["-", "+", "x", "/"];

  return (
    <>
      {operations.map((num) => {
        return (
          <button
            key={num}
            value={num}
            onClick={onClick}
            className="bg-[#89d9d2] h-full w-24 border active:scale-90  duration-10 p-0 text-2xl text-black m-0"
          >
            {num}
          </button>
        );
      })}
    </>
  );
}

export default Operations;
