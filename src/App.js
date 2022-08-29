import NavBar from './components/NavBar/NavBar';
import { useState } from "react"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes,Route } from "react-router-dom"
function App() {
  const [countCartInitial, setCountCartInitial] = useState(0)
  const OnAddCart = (product, stock) => {
    if (stock > 0) {
      setCountCartInitial(countCartInitial + product)
    }

  }


  return (
    <BrowserRouter>
      <NavBar countCart={countCartInitial} />
      <Routes>
        <Route path="/" element={<ItemListContainer onAdd={OnAddCart} greeting={"productos"} />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer onAdd={OnAddCart} greeting={"productos"} />}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// aeogjaiorgjaeo awrojgoaijrwgoae noieaorjgaoerjg naenrognaoerga  naoeirngonagona