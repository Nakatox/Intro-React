import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const Countries = () => {
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [playOnce,setPlayOnce] = useState([true])
    const [rangeValue,setRangeValue] = useState([40])

    useEffect(()=>{
        if (playOnce){
            axios.get('http://restcountries.eu/rest/v2/all?fields=name;population;SpeechRecognition;capital;flag')
            .then((res)=>{
                setData(res.data)
                setPlayOnce(false)
            })
        }
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i)=>data[i])
            const sortedArray = countryObj.sort((a,b)=>{
                return b.population - a.population
            })
            sortedArray.length = rangeValue
            setSortedData(sortedArray)
        }
        sortedCountry()
    },[data,rangeValue, playOnce])
    
    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={(e)=> setRangeValue(e.target.value)}/>
            </div>
            <ul className="countries-list">
                {sortedData.map((country)=>(
                    <Card country={country} key={country.name}/>
                ))}
            </ul>
        </div>
    )
}

export default Countries

// restcountries.eu/rest/v2/all?fields=name;population;SpeechRecognition;capital;flag