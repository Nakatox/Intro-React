import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Money from './Money'

const Cryptos = () => {
    const [data, setData] = useState([])
    const [playOnce,setPlayOnce] = useState(true)
    const [arraySorted, setArraySorted] = useState([])
    const [filterValue, setFilterValue] = useState("")

    useEffect(()=>{
        if (playOnce){
            axios.get('https://api.coinpaprika.com/v1/coins')
            .then((res)=>{
                setData(res.data)
                setPlayOnce(false)
            })
        }

        const filterMoney = (value) =>{
            const count = value.length
            let truc = []
            data.forEach((lala, index)=>{
                if(lala.name.substr(0,count) === value){
                    truc.push(data[index])
                }
                if(count.length === 0){
                    setArraySorted(data)
                }
            })
            setArraySorted(truc)
            
        }
        filterMoney(filterValue)
    },[data,playOnce,filterValue,arraySorted])

    
    return (
        <div className="crypto-container">
            <input type="text" onChange={(e)=>setFilterValue(e.target.value)}/>
            <ul className="list">
                {arraySorted.map((e)=>
                    (
                        <Money money = {e} key={e.id}/>
                    )
                )}
            </ul>
        </div>
    )
}

export default Cryptos
