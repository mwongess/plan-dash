import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className="input__container flex gap-[5px] justify-center items-center mb-[1rem] relative rounded-[22px] ">
    <div className="shadow__input absolute w-full h-full rounded-[20px] bg-[#999cff]"></div>
    <button className="input__button__shadow flex justify-center items-center rounded-[12px] p-[5px] cursor-pointer border-none ">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        height="20px"
        width="20px"
      >
        <path
          d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
          fill-rule="evenodd"
          fill="#17202A"
        ></path>
      </svg>
    </button>
    <input
      type="text"
      name="text"
      className="w-full rounded-[20px] border-none p-[8px] text-[black] relative outline-none"
      placeholder="Search here"
    />
  </div>
  )
}

export default SearchInput