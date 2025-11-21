import { useForm, useFieldArray,type SubmitHandler } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type DataType = {
    name: string,
    phNumbers: {
        number: string
    }[],
    RollNumber: number
    DOB: Date
}

const schema = z.object({
    name: z.string().nonempty("username is required")
})

const DynamicField = () => {

    const { register, control, handleSubmit, watch, getValues, setValue, formState, trigger } = useForm<DataType>({
        defaultValues: {
            name: "batman",
            phNumbers: [{ number: "" }],
            RollNumber: 0,
            DOB : new Date()
        },
        mode: "onBlur", // to trigger the validation when focus out the the input . there are option like "onSubmit", "onChange","onTouche","all"
        resolver: zodResolver(schema)
    
    })

    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control
    })

    const {errors, touchedFields, dirtyFields} = formState

    console.log(dirtyFields, touchedFields)

    const watchUsername = watch("name")

    const onSubmit : SubmitHandler<DataType> = (data) => console.log(data)

    const handleGetValues = () => {
        console.log(getValues())
    }
    
    const handleSetValues = () => {
        setValue("name", "Akshay")
    }

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
            {errors.RollNumber && <span>enter valid rollnumber</span>}

            <input type="date" {...register("DOB", {
                required:true,
                valueAsDate: true
            })}/>

            <button type="submit">submit</button>

            <button type="button" onClick={handleGetValues}>Get values</button>


            <button type="button" onClick={handleSetValues}>Set values</button>

             <button type="button" onClick={() => trigger()}>Trigger validation</button>

            
            </form>

            <h1>watch userName: {watchUsername}</h1>
            dfgdgfgdf
            gdfgdfgdfgfgdfgdfgdfgfddfgdfg
            dfgdfgdgfdgdfgdfgdfd
            fgdfdfdfdfggfgfgfdfdgfgdfdfdfdfgdfgdfgfddfdfgdfdfgdfgfdgdfgdff
            dfgdfgdgfdgdfgdfgdfdgdfd
            dfgdfgdgfdgdfgdfgdfdd
            f

        </>
    )
}

export default DynamicField
