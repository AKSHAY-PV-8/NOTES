import { useForm, type SubmitHandler } from "react-hook-form"

type Input = {
    name: string,
    lastName: string
}
const Example = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Input>()


    const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} />
                    <input type="text"{...register("lastName", { required: true })} />
                    {errors.lastName && <span>this feild reqierd</span>}

                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}

export default Example
