/* eslint-disable react/prop-types */
function ExtrasBtn({ ClearDisplay, DeleteNumbers, handleOperation }) {
  return (
    <>
      <button
        onClick={ClearDisplay}
        className="bg-[#F6F6F6] border active:scale-90 duration-100 p-4 text-2xl"
      >
        C
      </button>
      <button
        onClick={DeleteNumbers}
        className="bg-[#F6F6F6] border active:scale-90 duration-100 p-4 text-ms"
      >
        del
      </button>
      <button
        value={"%"}
        onClick={handleOperation}
        className="bg-[#F6F6F6] border active:scale-90 duration-100 p-4 text-2xl"
      >
        %
      </button>
    </>
  );
}

export default ExtrasBtn;
