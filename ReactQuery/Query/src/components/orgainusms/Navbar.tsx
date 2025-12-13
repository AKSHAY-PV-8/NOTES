import Button from "../atoms/Button"

const NavButtonList = [
    {id: 1, name: "Home", Link: "/"},
    {id: 2,name: "Marvel superHeroes", Link: "/MarvelHeroes"},
    {id: 3,name: "RQ SuperHeroes", Link: "/RQsuperHeroes"},
    {id: 3,name: "selected SuperHeroes", Link: "/dynamic"}
]

const Navbar = () => {
  return (
    <div className="h-14 bg-amber-600">
        {NavButtonList.map(button => (
            <Button key={button.id} theme="nav" name={button.name} Link={button.Link}/>
        ))}
    </div>
  )
}

export default Navbar
