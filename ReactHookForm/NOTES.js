
=>dev tool => npm i -D @hookform/devtools

        import it and 

        use after from like and also destructure controle from useFrom

        impott {DevTool} form "@hookform/devetools"


        const {control} = useFrom()

        <form>
            ......
        </form>
        <DevTool control={control}/>


        used for tracking the values 


=> react hook form don't rerender the on evet key stroke
it is improve performance


submit form data

        type FormData = {
            username: string;
            emanil: string;
        }
        const{register, control, handleSubmit} = useForm<FormData>()

        const onSubmit = (data: FormData) => console.log(dat)

        <form onSubmit(handleSubmit(onSubmit))>



form validation

        <input type="test {...register("name", {required:{
            value: true,
            message: "username is required"
        }})}/>

        <input type="test {...register("email", {pattern:{
            value: /^[a-zl.fk;dlfkg;dlfgdf],
            message: "invalid email type"
        }})}/>



to print error message 

        const {register, formState: {errors}}
        <form>
            <input type="text" />
            <p>{errors.name?.message}</p>
        </form>


add custom validations

        
        <input type="test {...register("email", {pattern:{
            value: /^[a-zl.fk;dlfkg;dlfgdf],
            message: "invalid email type"
        },validation: (fieldValue) => {
            return(
                fieldValue !== "admi@email.com"|| "Enter a different email address"
            )
        }})}/>

        
        we can also write as function into object so we can write differente validations


        validate: {
            notAdmin: (fieldValue) => {
                return(
                    fieldValue !== "admi@email.com"|| "Enter a different email address"
                )
            },
            notBlacklisted: (fieldValue) => {
                return !fieldValue.endwith("baddomain.com") || "This domain is not supported"
            }
        }


setting default values 


        import {useForm} from "react-hook-form"

        type DataType = {
            username : string;
            lastname : string
        }

        const {register} = useForm<DataType>({
            defaultValues: {
                username: "batman",
                lastname: ""
            }
        })


nested object and array


        import { useForm, type SubmitHandler } from "react-hook-form"

        type Input = {
            name: string,
            lastName: string,
            socail: {
                twiter: string,
                facebook: string
            }
            phoneNumber: []
        }
        const Example = () => {

            const {
                register,
                handleSubmit,
                formState: { errors }
            } = useForm<Input>({
                defaultValues: {
                    name: "batman",
                    lastName: "",
                    social:{
                        twitter: "",
                        facebook: ""
                    }
                }
            })


            const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

            return (
                <div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("name")} />
                            <input type="text"{...register("lastName", { required: true })} />
                            {errors.lastName && <span>this feild reqierd</span>}
                            <input type="text" {...register("socail.twitter")} />
                            <input type="text" {...register("social.facebook")} />
                            <input type="text" {...register("phoneNumber.0")} /> // first number
                            <input type="text" {...register("phoneNumber.1")} /> //secondery number

                            <input type="submit" />
                        </form>
                    </div>

                </div>
            )
        }


