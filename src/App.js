import React, { useEffect , useState} from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './components/Coin';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    setCoins(res.data)
  } 
  useEffect(()=> {
    getData()
  }, [])
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} search={search} setSearch={setSearch}/>} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
