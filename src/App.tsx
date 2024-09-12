import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const data = ["Tsuna", "Lelouch", "Naruto"];
  return (
    <>
      <Card>
        <CardBody title="Hola Mundo" text="lorem" />
        <List data={data} />
      </Card>
    </>
  );
}

export default App;
