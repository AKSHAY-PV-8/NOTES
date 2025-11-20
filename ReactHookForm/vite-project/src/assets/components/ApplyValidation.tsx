import { useForm, type SubmitHandler } from "react-hook-form"

interface Details {
    name: string,
    lastName: string,
    age: number
}

const ApplyValidation = () => {

    const {
        register,
        handleSubmit,
    } = useForm<Details>()

    const onSubmit: SubmitHandler<Details> = (data) => console.log(data)
    
    return (
        <div>

           <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", {required: true, maxLength: {value:7, message: "Name must be at most 7 characters" } })} placeholder="name"/>
                <input type="text" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="lastName"/>
                <input type="number" {...register("age", {min: 18, max:90})} placeholder="age"/>
                <input type="submit" />

                
           </form>

        </div>
    )
}

export default ApplyValidation
