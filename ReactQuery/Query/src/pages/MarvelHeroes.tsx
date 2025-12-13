import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {useNavigate} from "react-router-dom"

type HerosType = {
    name: string,
    id: number
}

const MarvelHeroes = () => {

    const navigate = useNavigate()

    const fetchData = async(link : string) => {
        const res =  await axios.get(link)
        return res.data

    }

    const {data: Heroes} = useQuery<HerosType[]>({
        queryKey: ["MarvelHeroes"],
        queryFn: () => fetchData("http://localhost:4000/Marvel")
    })

    const {data: NewHeros,} = useQuery<HerosType[]>({
        queryKey: ["NewMarvel"],
        queryFn: () => fetchData("http://localhost:4000/New")
    })

    console.log(Heroes)
  return (
    <div>
        <h1 className="text-2xl p-2">Marvel</h1>
        <ul>
            {Heroes?.map(name => (
                <li key={name.id} className="cursor-pointer"
                onClick={() => navigate(`/details/${name.id}`, {
                    state: {
                        version: "old"
                    }
                })}>{name.name}</li>
            ))}
            
        </ul>

        <h1 className="text-2xl p-2">New</h1>

            <ul>
                {NewHeros?.map(hero => (
                    <ul key={hero.id} className="cursor-pointer"
                    onClick={() => navigate(`/details/${hero.id}`,{
                        state:{
                            version: "new"
                        }
                    }
                    )}>{hero.name}</ul>
                ))}
            </ul>
      
    </div>
  )
}

export default MarvelHeroes
