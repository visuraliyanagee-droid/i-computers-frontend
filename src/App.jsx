import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <ProductCard name="laptop" price="100000" image="https://picsum.photos/seed/picsum/200/300"></ProductCard>
    <ProductCard name="phone" price="90000" image="https://picsum.photos/seed/picsum/200/300"></ProductCard>
    <ProductCard name="watch" price="5000" image="https://picsum.photos/seed/picsum/200/300"></ProductCard>

    </> 
  );
}

export default App
