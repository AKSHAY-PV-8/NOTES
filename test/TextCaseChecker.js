function TestcaseChecker (fun, array){

    let status = []

    array.map((input, index) => {
        const FunctionResult = fun(input.input)
        const result = input.result
        console.log("function result",FunctionResult)
        console.log("result", result)
        FunctionResult === result ? status.push([index,FunctionResult,result, true]) : status.push([index,FunctionResult,result, false])
    })
    
    return status  
}                       
const testcase = [
    {input: "hello", result: "olleh"},
    {input: "hello ", result: "olleh"},
    {input: "hello  ", result: "olleh"},
]
console.log(TestcaseChecker(fun, testcase))



  // return array.map((test, index) => {

    //     const {input, result: expected} = test
        
    //     const actual = Array.isArray(input) ? fn(...input) : fn(input);
    //     const status = JSON.stringify(actual) === JSON.stringify(expected);

    //     return {
    //         index,
    //         expected,
    //         actual,
    //         status
    //     }
    // })