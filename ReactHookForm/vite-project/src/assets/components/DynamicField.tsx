import { useForm, useFieldArray,type SubmitHandler } from "react-hook-form"

type DataType = {
    name: string,
    phNumbers: {
        number: string
    }[],
    RollNumber: number
}

const DynamicField = () => {

    const { register, control, handleSubmit } = useForm<DataType>({
        defaultValues: {
            name: "batman",
            phNumbers: [{ number: "" }],
            RollNumber: 0
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control
    })

    const onSubmit : SubmitHandler<DataType> = (data) => console.log(data)

    return (

        <>
            <h1>List of numbers</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                {
                    fields.map((field, index) => {
                        return (
                            <div className="" key={field.id}>
                                <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                                <button onClick={() => remove(index)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => append({number: ""})}>Add number</button>
            <input type="text" {...register("RollNumber",{
                required: true,
                valueAsNumber: true,
                validate: (fieldValue) => {
                    return(
                        fieldValue < 10 || "Enter a different Id"
                    )
                }
        
            })}/>

            <button type="submit">submit</button>
            </form>
        </>

    )
}

export default DynamicField
