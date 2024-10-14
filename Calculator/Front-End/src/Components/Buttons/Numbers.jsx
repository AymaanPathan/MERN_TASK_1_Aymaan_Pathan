/* eslint-disable react/prop-types */
function Numbers({ onClick }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      {numbers.map((num) => {
        return (
          <button
            key={num}
            value={num}
            onClick={onClick}
            className="bg-[#F6F6F6] w-full active:bg-gray-400 border active:scale-90 duration-100 p-4 text-2xl"
          >
            {num}
          </button>
        );
      })}
    </>
  );
}

export default Numbers;
