import { Button } from "../components/atoms/t"
import { useAddHeroData } from "../hooks/hooks"
import DependendQuery from "./DependendQuery"
import { useState } from "react"

const HomePage = () => {

  const [name, setName] = useState('')

  const {mutate: addHero} = useAddHeroData()

  const handleAddHero = (name: string) => {
      const hero = {name}
      addHero(hero)
  }
  
  return (
    <div>
        
        <h1>Home page</h1>
        <Button text="secondary" />
        <DependendQuery/>

        <input type="text" placeholder="name of hero" onChange={(e) => setName(e.target.value)}/>
        <Button text="add Hero" onClick={() => handleAddHero(name)}/>

      
    </div>
  )
}

export default HomePage
