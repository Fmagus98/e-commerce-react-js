import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from "./components/ItemCount/ItemCount"
import {useState} from "react"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  const [countCartInitial,setCountCartInitial]=useState(0)
  const onAddCart=(product)=>{
    setCountCartInitial(countCartInitial+product)
  }
  return (
    <>
     <NavBar countCart={countCartInitial}/>
     <ItemListContainer greeting={"productos"}/>
     <ItemCount product={"motherBoard h-110-m gigabyte"} stock={6} initial={1} onAdd={onAddCart}/>
     <ItemCount product={"motherBoard h-104-m asus"} stock={5} initial={1} onAdd={onAddCart}/>
     <ItemCount product={"Random access memory(RAM) 16gb hyperX"} stock={4} initial={1} onAdd={onAddCart}/>
     <ItemCount product={"Random access memory(RAM) 32gb hyperX"} stock={2} initial={1} onAdd={onAddCart}/> 
     </>
  );
}

export default App;
