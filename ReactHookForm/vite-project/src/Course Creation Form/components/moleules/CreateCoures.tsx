import { useForm } from "react-hook-form"
import { CourseFromData, courseSchema } from "../../Schema/CourseSchema"
import { yupResolver } from "@hookform/resolvers/yup"

const CreateCoures = () => {

    const { register, handleSubmit, watch, formState } = useForm<CourseFromData>({
        resolver: yupResolver(courseSchema)
    })

    const onSubmit = (data: CourseFromData) =>{
    }

    return (
        <div>
            <h1>Create Coures</h1>

            <form action="" onSubmit={handleSubmit(on)}>
                <input type="text" placeholder="Title" {...register("title")}/>

                <textarea placeholder="Description" {...register("description")}/>

                <input type="number" placeholder="Price" {...register("price")}/>

                <button>Create</button>
            </form>



        </div>
    )
}

export default CreateCoures
