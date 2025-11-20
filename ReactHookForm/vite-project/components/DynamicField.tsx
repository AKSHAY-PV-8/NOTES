import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"

type DataType = {
    name: string,
    phoneNumbers: {
        number: string
    }[]

}

const DynamicField = () => {

    const { register, control } = useForm<DataType>({
        defaultValues: {
            name: "batman",
            phoneNumbers: [{ number: "" }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        name: "phoneNumbers",
        control
    })

    useEffect(() => {
        console.log(fields)
    }, [fields])
    return (
        <div>
            <h1>list of phn numbers</h1>

            <div className="">
                {
                    fields.map((field, index) => {
                        return (
                            <div className="" key={field.id}>
                                <input type="text" {...register(`phoneNumbers.${index}.number` as const)} />
                                {
                                    index > 0 && (
                                        <button type="button" onClick={()=> remove(index)}>Remove</button>
                                    )
                                }
                            </div>
                        )
                    })
                }

                <button type="button" onClick={()=> append({number: ""})}>Add phone number</button>
            </div>

        </div>
    )
}

export default DynamicField
