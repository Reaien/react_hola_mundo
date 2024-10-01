import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);

  // Función separada para manejar el evento de click
  const handleClick = (i: number, element: string) => {
    setIndex(i);
    onSelect?.(element);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((element, i) => (
          <li
            onClick={() => handleClick(i, element)}
            key={element}
            className={`list-group-item ${index == i ? "active" : ""}`}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
