import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    // console.log(e);
    event.preventDefault();
    // console.log(event);
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar gifs"
        value={inputValue}
        // aqui como solo es un parametro podemos mandar solo la referencia
        onChange={onInputChange}
      />
    </form>
  );
};
