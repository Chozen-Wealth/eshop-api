import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Product from './pages/Product/Product'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'


function App() {

  const [data, setData] = useState(null)
  const [listeFavoris, setListeFavoris] = useState([])

  useEffect(()=> {
    axios.get("https://fakestoreapi.com/products/")
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Shop listeFavoris={listeFavoris} setListeFavoris={setListeFavoris} />}>
          <Route index element={<Home data={data} />} />
          <Route path='/products' element={<Product data={data} listeFavoris={listeFavoris} setListeFavoris={setListeFavoris} />} />
          <Route path='products/:id' element={<Details data={data} listeFavoris={listeFavoris} setListeFavoris={setListeFavoris} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
