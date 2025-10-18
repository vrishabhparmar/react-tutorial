import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(){
    super();
    console.log('Constructor Initiatized');
    console.log('Data loading');
    this.state = {
        loading: true,
        id:1, 
        data:""
    }
  }
  
  componentDidMount(){
    console.log('Component Mounted');
    console.log('Fetching Data');
    setTimeout(() => {console.log('Fetched Data')
    
        this.setState(
            {
                loading:false,
                data:"Some Data"
            }
        )
        }
    , 2000);
    

   
  }

  componentDidUpdate(prevProps, prevState){
   
    if(prevState.id != this.state.id)
    {
        console.log('Component Updates');
        console.log('Fetching Data again');

        this.setState({
            data:'New Data'
        })
    }
    
  }

  componentWillUnmount(){
    console.log('Component Unmounted');
    //clearInterval(this.interval)
  }

  increment(){
    this.setState({
        id: this.state.id + 1
    })
  }
  

  render() {
    console.log('Rendering data');
    return (
      <div>
        <h1>{this.state.loading ? '' : this.state.data + ' ' + this.state.id}</h1>
        <button onClick={() => this.increment()}>Click me!</button>
      </div>
     
    )
  }
}
