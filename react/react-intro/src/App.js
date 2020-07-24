import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const url = 'http://tech.splinex-team.com:4999/api/table';
const main = document.getElementById('root');
const code = {
  "[OK]" : 0,
  "[WARNING]" : 1,
  "[FAIL]" : 2
}

function fetchTable(){
  fetch(url)
  .then(r=>{
    return r.json;
  })
  .catch(e=>{
    return "error ",e; 
  });
  
}

class Clock extends React.Component {
  
  main = fetchTable();

  constructor(props) {
    super(props);
    this.state ({date: main.dt_update});  
  }
  
  // fetchTable(){
  //   fetch(url)
  //   .then(r=>{
  //     return r.json;
  //   })
  //   .catch(e=>{
  //     return "error ",e; 
  //   });
  // }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log(main.dt_update);
    this.setState({      
      date: main.dt_update   
    });  
  }
}

class App extends Component{
  render(){
    return(
      <div>{Clock} </div>
    );
  }
}

export default App;