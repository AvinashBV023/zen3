import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);

      
      this.state = {noofRow:0,cols:[],spaceRows:10,spaceBox:0};
      this.updateRows = this.updateRows.bind(this);
      this.updateCols = this.updateCols.bind(this);

      this.updateRowspace = this.updateRowspace.bind(this);

      this.updateColumnspace = this.updateColumnspace.bind(this);



    }
    markup;


  updateRows(e){
    
    this.setState({noofRow:e.target.value});

  

  }
  updateCols(e){
    let string='';


  const colArray=e.target.value.split(',');
  this.setState({cols:colArray});



  }
  rowstyle;
  columnstyle;
  updateRowspace(e){

  console.log(e.target.value);
    this.setState({spaceRows:e.target.value});
    this.rowstyle = `margin-bottom:${e.target.value}px`;

    console.log(this.rowstyle,'this.rowstyle');

  }
 
  componentDidUpdate (){
    let string='';


  
    for(let i=0;i<this.state.noofRow;i++){
    string+=`<div class="row" style=${this.rowstyle} >`;
    console.log(this.state.cols[i]);
      for(let j=0;j<this.state.cols[i]; j++){
        string += `<div class="col" style=${this.columnstyle}></div>`;
      }
      string+=`</div>`;
  
  
  }
  const node = document.querySelectorAll('#parent')[0];
  
  node.innerHTML = string;
  }
  updateColumnspace(e){
    console.log(e.target.value);

    this.setState({spaceBox:e.target.value});
    this.columnstyle = `margin-left:${e.target.value/2}px;margin-right:${e.target.value/2}px`;
    // e.target.style.setProperty('--x',e.target.value);
  }

    render() {
      return (
        <div className="container">
          <h1 >Task</h1>
        <input className="inpt" onChange={this.updateRows} placeholder="enter no of rows ex:3"></input>
        <input className="inpt" onChange={this.updateCols} placeholder="enter no of columns ex:3,1,4"></input>
        <input className="inpt" onChange={this.updateRowspace} placeholder="enter space between rows ex:10"></input>
        <input className="inpt" onChange={this.updateColumnspace} placeholder="enter space between boxes ex:10"></input>

          <div id="parent">
          </div>
    
        </div>
      );
    }
}

export default App;
