import {useForm, type SubmitHandler} from "react-hook-form"

enum GenterEnum {
    female = "female",
    male = " male",
    other = "other"
}

interface Input{
    firstName: string,
    genter: GenterEnum
}

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm<Input>()

    const onSubmit : SubmitHandler<Input> = (data) => console.log(data);


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name" {...register("firstName")}/>
            <label htmlFor="">Genter Selection</label>
            <select {...register("genter")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>

            <input type="submit" />
        </form>
      
    </div>
  )
}

export default RegisterForm
