/* eslint-disable react/prop-types */
function Answer({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-gradient-to-r w-[13.5rem] from-[#1f645e] to-[#2d938b] border active:scale-95 duration-100  text-2xl text-white"
      >
        =
      </button>
    </>
  );
}

export default Answer;
