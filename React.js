/*

REACT
------


-> react-router-dom : is a popular library that used for rounting in react
   -----------------

routing ?

=> rounting = controlls which components / page should show when url changes

<BrowserRouter> ==> - is the main router provider.
                    - it listens to browser url (using HTML5 history API).
                    - it wrap entire app so rounting can work inside .

                    <BrowserRouter> ==> <Router> 

<routes> ==> a container for all route
            react router v6 introduced it 
            it will macth the current url with first <Route> that fit 

<route> ==> defines map between react component and Url path.


Example:

    import{BrowserRouter as Router, Routes, Route} from react-router-dom;

    function App() {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
        
    )
    }

    export default App

=========================================================================





REACT
=====================================

what are components?
    .a components is like a building block of React app
    .each componet is arusable piece of UI
        that can accept inputs(props).
        can have its own state.
        return JSX(ui)

=> COMPONENT Types
----------------
****************************************

1. stateless function components :- function welcome(prop) {
                                        return <h1>hello, {props.name} </h1>
                                    }

2. stateful classs components :- class welcome extends React.Component {
                                        render(){
                                        retrun <h1> hellow </h1>}
                                    }
import/Export things
---------------------

.if we use => export default Component -> we can import like
                                        import Components from './components'

.if we use => export const Component -> we can import like 
                                        import {Component} from './components'  

.functional components
------------------------*******
->its a js function that recieves propeties(props) and return HTML.

.Class components
------------------*********
->its also receives pops and return html , but it maintaine orivet internal state


ADVATAGES
---------

functional components ->DATA FLOW ///////////////
******************************************************************************

function hello(props) => {
        return <h1> hello {props.name} </h1>
    }

when we create a function component like above 

1. function return a jsx like => helloe({name: "amal"});
2. browser dont understand jsx only understand plan js 
   - babel conver jsx to react.createElement("h1", null, "hello amal") ;
   -------
3. reconciler figures out what changes are occres
    ---------

    reconciler => . is react's decision maker
                  . it compare old virtual DOM vs new virtual DOM
                  . then figures out minimal changes 

4.react renderer update real DOM efficiantly
  --------------

    react renderer => . the builder 
                      . when the reconciler decides what should change ,
                        renderer update the actual screen

virtual DOM(aditional topic)
----------------------------

. before changing the real DOM, react builds a virtual copy of DOM in memory
. real dom is slow to change
. virtual DOM is fast (it's just a js object)



class components -> DATA FLOW ///////////
***************************************************************

class hello extends React.Component{
    render(){
        retrun <h1>hello {this.props.name} <h1>
    }
}

1. when react see a <h1>hello {this.props.name} <h1>

    creat a new instance -> instance is unusable object created from class (bluePrint)
    
    const instance = new hello({name: "amal"});

2. hello extends react.Component, the constructor from react.compontent runs ->
   which setUp this.props and this.state
                -----------------------

3. class render() it returns jsx -> compiled to React.createElement


PROPS
******
props is just an object that contains the attributes and its value pased for its parent component

child component receives it as argument


=> componte => <Greed name="arun" age="14"/> (parent component)


=> const Greed = props => {
            console.log(props)   (in console it shows an object with 
                                  details from aprents)

            return <h1>hello {props.name} age is {props.age} </h1>
        }
    export default Greed; 



what is the difference between props and state?

props                               |  state 
------------------------------------|------------------------------------
.props get passed to component      |.state is managed with in component
.function parameters                |.variables declared in function body
.props are can't make change by     |.state can be changed
childercomponent                    | 
                                    |
props                               | useState Hook 

=========================================================================

desturcturing props
--------------------

const greet = props => {
    const {name, age} = props
    retrun (
    <h1>{name} age: {age}</h1>
    )}


STATE & setState
-----------------
what are states?
    state = internal date of a component

what are setState?
    setState = tells react update the UI

in class component
-> this.state => holds the date 
-> this.setState() => updates it


Event handlers
--------------

what is eventhandler?
    is just a function that run when an event happends

->when use evenhandlers don't use ()
    ex: <button onClick = {clickHandler}> Click </bttuon>

    clickHandler is the event handler - don't use ()

====================================================

what is conditional rendering ?

    show different UI depending on a conditon (true/false, value, state, etc).

List
----

why we adding unique key when render list using map()?
    because using the key react can add , delete, etc efficently later if needed.
    
how react works in case of list ?

    example: 
    <ul>
        <li>apple</li>
        <li>mango</li>
    </ul>

    <ul>
        <li>apple</li>
        <li>mango</li>
        <li>orange</li>
    </ul>

    while adding 3rd item -> react look first list and comaper to old DOM
                            and new DOM, if no change look for change, when it get a change react update the DOM

    but in some case 
    like :-

        <ul>
            <li>apple</li>
            <li>mango</li>
        </ul>

        <ul>
            <li>orange</li>
            <li>apple</li>
            <li>mango</li>
        </ul>

        add item at first of the list , when react chech changes all are changed , so react support KEY

        react reffer KEY to access each list to make more efficiant

=========================================
   
what is framents?
    avoid unnecessary <div> wrappers -> cleaner Html Structure

    use
        <React.Fragment>
            <h1>hello</h1>
            <p>welcom</p>
        </React.Fragment



difference between Regular Component vs pure Component

.regular component(rerender)
-------------------
-> a regular component does not inplemnet the shouldComponentUpdate method. it always returns true by default.

-shouldComponentUpdate method means :preventing unnecessary renders

pure compontes(not rerender)
--------------
implements shouldcomponentsUpdate with shallow props and state comparison

=>shallow comparison :- returns true if a and b have the same value and of same type 

=>  var a = [1,2,3]
    var b = [1,2,3]
    var c = a;

    (a === b) //false
    (a === c) // true

=>  var a = { x: 1, y: 2};
    var b = { x: 1, y: 2};
    var c = a;

    (a === b) //false
    (a === c) //true


what is memo?

    memo help to use pureComponets in functional components.

    =>how to use it?

    function functionName({}){
        return(
        .....
        ......
        )
    }

    export default React.memo(functionName)
                                                                    
                        
for what higher order functions are used?
    need to share commen functionality among componets without repeating code.
               
                                
what is use of context?
    context provides a way to pass data through the component tree without having to pass props down manually at every level.


    
 