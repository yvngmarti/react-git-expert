import { GifGridItem } from "./index";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  // console.log({ isLoading });
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4>Cargando...</h4>}
      <div className="card-grid">
        {images.map((img) => (
          // <li key={id}>{title} </li>
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
