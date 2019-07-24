import React, {useState} from 'react';
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
updateRowspace(e){
  // let string='';

console.log(e.target.value);
  this.setState({spaceRows:e.target.value});


}
componentDidUpdate (){
  let string='';


 
  for(let i=0;i<this.state.noofRow;i++){
   string+=`<div class="row" style=${'margin:'+this.state.spaceRows+'px'} >`;
   console.log(this.state.cols[i]);
     for(let j=0;j<this.state.cols[i]; j++){
       string += `<div class="col" style=${'margin:'+this.state.spaceBox+'px'}></div>`;
     }
     string+=`</div>`;
 
 
 }
 const node = document.querySelectorAll('#parent')[0];
 
 node.innerHTML = string;
}
updateColumnspace(e){
  // let string='';
  console.log(e.target.value);

  this.setState({spaceBox:e.target.value});
  // for(let i=0;i<this.state.noofRow;i++){
  //   string+=`<div class="row" style=${'margin:'+ this.state.spaceRows +'px 0px'} >`;
  //     for(let j=0;j<this.state.cols[i]; j++){
  //       string += `<div class="col" style=${'margin: 0px '+ e.target.value +'px'}></div>`;
  //     }
  //     string+=`</div>`;
  
  
  // }
  // const node = document.querySelectorAll('#parent')[0];
  
  // node.innerHTML = string;

}

  render() {
    return (
      <div className="container">
        <h1 >Task</h1>
       <input className="inpt" onChange={this.updateRows} placeholder="enter no of rows"></input>
      <input className="inpt" onChange={this.updateCols} placeholder="enter no of columns"></input>
      <input className="inpt" onChange={this.updateRowspace} placeholder="enter space between rows"></input>
      <input className="inpt" onChange={this.updateColumnspace} placeholder="enter space between boxes"></input>

        <div id="parent">
       {/* {this.markup} */}
        </div>
   
      </div>
    );
  }
}

export default App;
