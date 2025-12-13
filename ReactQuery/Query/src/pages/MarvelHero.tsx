import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useLocation, useParams } from "react-router-dom"


type HeroType = {
    id: number,
    name: string,
    alterEgo: string,
    power: string,
    origin: string,
    team: string,
    strengthLevel: number,
    image: string
}

const MarvelHero = () => {
    const {heroId} = useParams()
    const loction = useLocation()

    const version = loction.state?.version

    const fetchData = async(heroId :string | undefined) => {
        const res = await axios.get(
            version === "old" ? `http://localhost:4000/Marvel/${heroId}`: `http://localhost:4000/New/${heroId}`
        )
        return res.data
    }

    const {data, isLoading} = useQuery<HeroType>({
        queryKey: ["details", heroId, version],
        queryFn: () => fetchData(heroId)
    })

    if(isLoading) return <h1>Loading ....</h1>

  return (
    <div>
        <h1 className="text-4xl p-2">Details</h1>
        <div className="p-2">
            <h1 className="text-2xl">{data?.name}</h1>
            <img src={data?.image} alt="" />
        </div>
      
    </div>
  )
}

export default MarvelHero
