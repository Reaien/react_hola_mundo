import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const data = ["Tsuna", "Lelouch", "Naruto"];
  const handleSelect = (element: string) => {
    console.log(element);
  };

  return (
    <>
      <Card>
        <CardBody title="Hola Mundo" text="lorem" />
        <List data={data} onSelect={handleSelect} />
      </Card>
    </>
  );
}

export default App;
