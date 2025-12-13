import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetchData= async(heroId: number | string | undefined) => {
   return await axios.get(`http://localhost:4000/SuperHeros/${heroId}`)
}

export const useFetchData = (heroId: string | number | undefined) => {
    return useQuery({
        queryKey: ["heroId", heroId],
        queryFn: () => fetchData(heroId)
    })
}

const addSuperHero = (hero: string) => {
    return axios.post("http://localhost:4000/Marvel", hero)
}
sdsdf s  dfsd s d  dfsssdf s sdffsd sdf sdf  sd sdf f  sdf  sdf sdf sdf ssssssssssssssssssss sd sddd d dfd saasas d d sassssss sa a as sddff dsadssdfsdf s sd head the wesd sdf sdf sdf asw we asw s sd df sfd dfsd sdf sdf dfgdfg dfg dfdfgdfdfg dfg dfg ddfgdf dfg fdg df d df dfg  dg dfg dfg dfgdfg df dsfg sfddf df sdf dfg dfg dfg dgf sfdsddddfsdfsddsdfs sd ssdfs f sdfsd sdssdf sdf sdsd sdf sf sdf adasd asd asasd sd asdasd asd as 

export const useAddHeroData = () => {
    return useMutation(addSuperHero)
}