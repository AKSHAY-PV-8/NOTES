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

. componte => <Greed name="arun" age="14"/>

. in other componets use ase 

    const Greed = props => {
            return <h1>hello {props.name} age is {props.age} </h1>
        }
    
    export default Greed;





