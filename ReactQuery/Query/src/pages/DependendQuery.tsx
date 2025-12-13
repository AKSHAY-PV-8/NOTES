import { useState } from "react"
import { Button } from "../components/atoms/t"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type HeroType = {
    id: number,
    name: string
}

const DependendQuery = () => {
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");

    const fetchdata = async(Name: string) => {
        const res = await axios.get(`http://localhost:4000/Marvel?name=${Name}`);
        return res.data

    }

    const {data, isLoading} = useQuery<HeroType>({
        queryKey: ["search", name],
        queryFn: () => fetchdata(name),
        enabled: !!search
    })


    console.log(data)

    if(isLoading) return <h1>Loading....</h1>

  return (

    <div>
        <input type="text" className="bg-amber-300 border rounded-2xl m-2" placeholder="superhero name"
        onChange={(e) => setName(e.target.value)}/>
        

        <Button text="search" onClick={()=> setSearch(name)}/>
      
    </div>
  )
}

export default DependendQuery
