import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {useNavigate} from "react-router-dom"


type Hero = {
    id: number,
    name: string
}

const RQsuperHeroes = () => {
    const navigate = useNavigate()
    const {isLoading, data, isError , error, refetch} = useQuery<Hero[]>({
        queryKey: ["superHeroes"],
        queryFn: async() => {
            const res = await axios.get("http://localhost:4000/SuperHeros")
            return res.data
        }
    })

    if (isLoading) return <h2>Loading...

    </h2>
    if(isError) return <h1>{error.message}</h1>

  return (
    <div>
        <h1>RQ Super Heroes</h1>
        {
            data?.map((name) => (
                <h2 onClick={() => navigate(`/superHeroes/${name.id}`)}key={name.id}>{name.name}</h2>
            ) )
        }

        <button onClick={() => refetch()}>Re-fetch</button>
        
    </div>
  )
}

export default RQsuperHeroes
