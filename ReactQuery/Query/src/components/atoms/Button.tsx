import clsx from "clsx"
import {useNavigate} from "react-router-dom"


type PropType = {
    theme: "primary" | "secondary" | "nav",
    name: string,
    Link?: string
}


const Button: React.FC<PropType> = ({theme, name, Link}) => {

    const navigate = useNavigate()

  return (
    <button
    
    onClick={() =>{
        if (Link) navigate(Link)}
    }
    className={
        clsx(
            "bg-amber-200 text-white",
            {
                "bg-black text-white rounded-2xl p-2 m-2": theme === "nav",
                "bg-blue-500 text-white rounded-2xl p-2 m-2": theme === "primary",
                "bg-green-300 text-white rounded-2xl p-2 m-2": theme === "secondary",
            }
        )
    }>
        {name}
      
    </button>
  )
}

export default Button
