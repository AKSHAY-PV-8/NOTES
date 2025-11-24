import * as yup from "yup"

export const courseSchema = yup.object({
    title: yup.string().required().min(3),
    description: yup.string().required().min(10),
    price: yup.number().required().positive(),
    // category: yup.string().required()
})


export type CourseFromData = yup.InferType<typeof courseSchema>