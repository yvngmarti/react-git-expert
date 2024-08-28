import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  const onAddCategory = (newCategory) => {
    // push muta el estado y no es recomendable hacerlo en React
    // categories.push("Playboi Carti");

    if (categories.includes(newCategory)) return;
    console.log(newCategory);

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input para buscar gif mediante el nombre */}
      <AddCategory
        // setCategories={setCategories}

        // tambien podria ser value en ves de event
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        // <div key={category}>
        //   <h3>{category}</h3>
        //   <li>{category}</li>
        // </div>

        // es mejor dividir el codigo en componentes
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
