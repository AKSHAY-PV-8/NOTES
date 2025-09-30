
import { Component } from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = { count : 0 }
    }
    render() {
        return (
            <>
                <h1>COUNTER {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count +1})}>add</button>
            </>
        )
    }
}

export default Counter; 
              
                                  