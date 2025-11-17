import { jsx } from "react/jsx-runtime"

Type Script:- DOC(https://www.typescriptlang.org/docs/)
-----------

.debounce?

        type script is realy a super set of js

            -> it reduce the runtime error 
            -> it help to make js more presice manner

            => type script is all about type safety


1. what is the use of TypeScript?

        => The only job that typescript done for you is 

                    => Static checking. 

            sub) What is mean by static checking

                    checking code for error before running if. 


                    => typeScript uses static checking to detect.

                        . type mistakes
                        . missing properties
                        . wrong retun values
                        . invalid function arguments
                        . code paths that can cause runtime errors

                        
2. is TypeScript is development tool ?

            => yes, it's a develoment tool , your project still runs js
                
            - it improve your code, less problem, maintanable, scalable. 

3. what is basic syntax of typescript? 

        =>  let variableName: type = values

                - type always lowercase

            example: let greeting: string = "Hellow" 


4. what is the "any" datatype and when it use ?

        => when we no need to type check we use "any"


5. what is the syntax in function? 

        => function addTwo(num: number){
            return num + 2
        }

        when multiple argument comes

                let login = (name: string, email: string, ispaid: boolean)

                login("heman",heman@gmail.com) // it shows error because ispaid is not passed so, we must set a default value for it 

                => let login = (name: string, email: string, ispaid: boolean = false)


in case array?

        const heroes = ["thor", "spiderman", "ironman"]
        const heros = [1,2,3]

        heros.map((hero) => {
                return hero
        })

        => type script automaticly identify the type inside the array, no no need to seperate datatype 



        better syntax

                heroes.map((hero): string => {
                        return 'hero is ${hero}'  // in this output is string so we put like that
                })

        
        function consoleError(errmsg: string): void{
                console.log(errmsg) // in this void means this function return nothing
        }



what is "never" type means?


                the never type represents values which are never observed. in a return type, this means 
                the function throws an exeption or terminates execution of prgm


                example:

                        fucntion handleError (msg: string) never{
                                throw new Error(msg)
                        }


