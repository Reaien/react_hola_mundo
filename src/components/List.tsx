type Props = {
  data: string[];
};

function List({ data }: Props) {
  // Función separada para manejar el evento de click
  const handleClick = (element: string) => {
    console.log(`Hiciste clic en: ${element}`);
  };
  return (
    <>
      <ul className="list-group">
        {data.map((element) => (
          <li
            onClick={() => handleClick(element)}
            key={element}
            className="list-group-item"
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
