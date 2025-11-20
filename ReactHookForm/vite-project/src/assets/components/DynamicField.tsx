import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"

type DataType = {
    name: string,
    phNumbers: {
        number: string
    }[]
}

const DynamicField = () => {

    const { register, control } = useForm<DataType>({
        defaultValues: {
            name: "batman",
            phNumbers: [{ number: "" }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control
    })

    useEffect(() => {
        console.log(fields.map(field => field.number))
    }, [fields])

    return (

        <>
            <h1>List of numbers</h1>
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
        </>

    )
}

export default DynamicField
