import { Button, Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"url="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
