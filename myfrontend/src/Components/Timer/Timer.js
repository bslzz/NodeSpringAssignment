import React, { Component } from 'react'

class Timer extends Component {
    state = {
      time: {}
    };
  
    componentDidMount() {
        return (
            <div>
              <h1>Time left: {time}</h1>
            </div>
          )
    }
  
    }
    //alert('Timeout!')
   // this.props.history.push('/spinner');
  
  
  export default Timer;