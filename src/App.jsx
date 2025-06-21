import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className='app-container'>
      <NavBar />
      <ItemListContainer saludo= { "Bienvenidos a Pawtopia Shop" } />
    </div>
  )
}

export default App
