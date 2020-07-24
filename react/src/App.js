import React, { Component } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import logo from './logo.svg';
import './App.css';

const url = 'http://tech.splinex-team.com:4999/api/table';
const main = document.getElementById('root');
const code = {
  "[OK]" : 0,
  "[WARNING]" : 1,
  "[FAIL]" : 2
}


// arrow components
const MyButton = ({label, onClick}) =>{
  return <button className='btn--large' onClick={onClick}>{label}</button>
}

const MonitoringTable = ({tableData}) =>{
  return <table>
    <tbody>
    <tr>
      <td>{JSON.stringify(tableData)}</td>
    </tr>
    </tbody>
  </table>
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tableData:[]
    };
    this.updateTableLoop = this.updateTableLoop.bind(this);

  }
  componentDidMount() {
    console.log('start update loop!');
    this.updateTableLoop();
  }
  async fetchTableData() {
    const resp = await fetch(url).then(r=>r.json()).catch(error=>{return {error};});
    this.setState({tableData:resp})
  }
  updateTableLoop() {
    this.fetchTableData();
    setTimeout(this.updateTableLoop, 2000)
  }
  render(){
    return(
      <div style={{width: '100%', backgroundColor: 'green', border: '1px solid black', marginTop: '10px', padding: '10px'}}>
        <div style={{display: 'flex', padding: '10px'}}>
          <MyButton label={'arrow component button'} onClick={()=>{console.log('click!')}}/>
          <AwesomeButton type="primary" style={{marginLeft: '10px'}}>Button</AwesomeButton>
        </div>
        <h1>Table</h1>
        <MonitoringTable tableData={this.state.tableData}/>
      </div>
    );
  }
}

export default App;