import NavBar from './components/NavBar/NavBar';
import { useState } from "react"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  const [countCartInitial, setCountCartInitial] = useState(0)
  const OnAddCart = (product,stock) => {
    if (stock > 0) {
      setCountCartInitial(countCartInitial + product)
    }

  }
  return (
    <>
    <header>
      <NavBar countCart={countCartInitial} />
    </header>
      <ItemListContainer onAdd={OnAddCart}  greeting={"productos"} />
    </>
  );
}

export default App;
