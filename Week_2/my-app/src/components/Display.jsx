import React, {Component} from 'react'

class Display extends Component{

    componentDidMount(){
        console.log("Display Component did mount");
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps.count + " : " + this.props.count);
        if(prevProps.count !== this.props.count)
        {
            console.log("Component Updated");
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Display Should Component Update');
        return true;
    }

    componentWillUnmount(){
        console.log("Display Component Unmounted");
    }

    render(){

        console.log("Display Render Runs");
        return (
            <h1>Hello from Class Component {this.props.count}</h1>
        )
    }
}

export default Display