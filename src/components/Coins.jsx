import React from 'react'
import CoinItem from './CoinItem'
import Coin from './Coin.jsx'
import { Link } from 'react-router-dom'
import './Coins.css'

const Coins = (props) => {
    const filterCoins = props.coins.filter((coin) => 
    coin.name.toLowerCase().includes(props.search.toLowerCase()) | 
    coin.symbol.toLowerCase().includes(props.search.toLowerCase())
    ) 
    return (
        <div className='container'>
            <div className='row'>
                <input type='text' placeholder='Search a Coin' className='input_search' onChange={e => props.setSearch(e.target.value)} />
            </div>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {filterCoins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
        </div>
    )
}

export default Coins
