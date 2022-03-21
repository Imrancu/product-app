import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Menubar from './components/Menubar/Menubar';

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="App">
      <Menubar count={count}/>
      <AllProducts setCartCount={setCartCount}/>
    </div>
  );
}

export default App;
