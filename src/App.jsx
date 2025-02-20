import './App.css'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService'

const App = () => {
const [starships, setStarships] = useState([])
const [search,setSearch]=useState('')

const fetchData = async () => {
  const data = await starshipService.index()
  setStarships(data.results)}
 

useEffect(()=> {
 
fetchData()

},[])
//need function that can grab the data from searchlist
const handleSearch=(formData)=>{
setSearch(formData)
}

return (
<>
<h1>Star Wars API</h1>

<StarshipSearch handleSearch={handleSearch}/>
<StarshipList starships={starships} search={search}/>
</>


)


} 



export default App 