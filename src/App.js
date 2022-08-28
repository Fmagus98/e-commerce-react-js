import NavBar from './components/NavBar/NavBar';
import { useState } from "react"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  const [countCartInitial, setCountCartInitial] = useState(0)
  const OnAddCart = (product,stock) => {
    if (stock > 0) {
      setCountCartInitial(countCartInitial + product)
    }

  }
  return (
    <>
      <NavBar countCart={countCartInitial} />
      <ItemListContainer onAdd={OnAddCart}  greeting={"productos"} />
      <ItemDetailContainer/>
      </>
  );
}

export default App;
