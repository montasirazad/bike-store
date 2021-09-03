import './App.css';
import fakeData from '../src/Fake data/fakeData.json'
import { useEffect, useState } from 'react';
import Products from './Components/Products/Products';
 

function App() {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    setBikes(fakeData)
    console.log(fakeData)
  }, [])
  return (
    <div className="App">
       <img style={{height:'300px'}} src=" https://i.pinimg.com/originals/14/d8/e5/14d8e57c7656356df80bced6f48f206b.png" alt="" />
      <h1>Bike store</h1>

      {
        bikes.map(bike => <Products bike={bike} key={bike.id}> </Products>)
      }
    </div>
  );
}

export default App;
