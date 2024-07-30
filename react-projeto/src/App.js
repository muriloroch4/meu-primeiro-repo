/*cria um card para reutilizar o codigo */

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      {props.texto}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card src = "https://picsum.photos/id/239/200/300" texto = "Card 1"></Card>
      <Card src = "https://picsum.photos/id/240/200/300" texto = "Card 2"></Card>
      <Card src = "https://picsum.photos/id/241/200/300" texto = "Card 3"></Card>
    </div>

  );
}

export default App;
