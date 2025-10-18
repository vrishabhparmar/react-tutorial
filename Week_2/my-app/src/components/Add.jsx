import React, {Component} from 'react';
import Display from './Display'



class Add extends Component{


    constructor(){
        super();
        console.log("Add Constructor: Initializing state or binding methods");
        this.state = {
            count:0
        }
    }


    componentDidMount(){
        console.log('Add Component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Add Should Component Update');
        return true;
    }

    componentWillUnmount(){
        console.log('Add Component Unmount');
    }

    increment(){
        this.setState({count: this.state.count + 1});
    }

    // ES5
    decrememt(){
        this.setState({count: this.state.count - 1});
    }
    

    render(){

        console.log("Add Render Runs");
       return (
        <div>
            <Display count={this.state.count}/>
            <button onClick={() => this.increment()}>Add + </button>
            <button onClick={this.decrememt.bind(this)}>Sub - </button> 

        </div>
       )
    }
}

export default Add; // Export as Default
