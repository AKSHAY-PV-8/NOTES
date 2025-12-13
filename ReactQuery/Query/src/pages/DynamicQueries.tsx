import { useQueries } from "@tanstack/react-query"
import axios from "axios"

type heroType = {
    heroId: number[]
}

type promiseType = {
    id: number,
    name: string,
    team: string,
    alterEgo: string
}
const DynamicQueries: React.FC<heroType> = ({heroId}) => {

    const fetchData = async(Id:number): Promise<promiseType> => {
        const res = await axios.get(`http://localhost:4000/Marvel/${Id}`)
        return res.data
    }

    const queryReuslt = useQueries({
        queries: heroId.map((id) => {
            return{
                queryKey: ["selectedHeros", id],
                queryFn: () => fetchData(id),

            }
        })
    })


  return (
    <div>
        <h1>Selected</h1>
        
        {queryReuslt.map((query, index) => (
            <h1 key={index}>
                {query.data?.name} - {query.data?.alterEgo}
            </h1>
        ))}
      
    </div>
  )
}

export default DynamicQueries
