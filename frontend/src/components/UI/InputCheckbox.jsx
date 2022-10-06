function InputCheckbox({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="flex mb-2 font-bold text-sm text-[#d6a77a]" htmlFor={name}>
        <input
          className="p-2 border rounded mr-2"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder} //deixar com um tom mais claro
          onChange={handleOnChange}
          value={value}
          multiple={true}
        />
        {text}
      </label>
    </div>
  );
}

export default InputCheckbox;
