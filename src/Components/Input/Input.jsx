function Input({ placeholder, name, errorMessage, register, rules, type }) {
  return (
    <div className="group relative  z-0 mb-6 w-full">
      <input
        type={type}
        placeholder=""
        {...register(name, rules)}
        className="peer block w-full appearance-none border-0 border-b-2  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0 border-white dark:focus:border-white"
      />
      <label
        htmlFor="avatar"
        className="absolute top-3 -z-10  origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-white text-white peer-focus:dark:text-white"
      >
        {placeholder}
      </label>
      <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}

export default Input;
