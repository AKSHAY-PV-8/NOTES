import { useParams } from "react-router-dom"
import { useFetchData } from "../hooks/hooks"

const SuperHerosPage = () => {
    const {heroId} = useParams()

    const {data, isLoading} = useFetchData(heroId)

    if(isLoading) return <h1>Loading .....</h1>
  return (
   <div>
        <h1>Super Heroe Details</h1>
        name::{data?.data.name}
        
    </div>
  )
}

export default SuperHerosPage
