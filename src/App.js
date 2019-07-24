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
  
let string='';
  this.setState({noofRow:e.target.value});
  console.log(this.state.noofRow);
  if(this.state.cols){
    for(let i=0;i<e.target.value;i++){
      string+=`<div class="row" style=${'margin:'+this.state.spaceRows+'px'}>`;
      console.log(this.state.cols[i]);
        for(let j=0;j<this.state.cols[i]; j++){
          string += `<div class="col" style=${'margin:'+this.state.spaceBox+'px'}></div>`;
        }
        string+=`</div>`;
  }



  }
  const node = document.querySelectorAll('#parent')[0];

  node.innerHTML = string;
 

}
updateCols(e){
  let string='';


 const colArray=e.target.value.split(',');
 this.setState({cols:colArray});

 for(let i=0;i<this.state.noofRow;i++){
  string+=`<div class="row" style=${'margin:'+this.state.spaceRows+'px'} >`;
  console.log(this.state.cols[i]);
    for(let j=0;j<colArray[i]; j++){
      string += `<div class="col" style=${'margin:'+this.state.spaceBox+'px'}></div>`;
    }
    string+=`</div>`;


}
const node = document.querySelectorAll('#parent')[0];

node.innerHTML = string;

}
updateRowspace(e){
  // let string='';

console.log(e.target.value);
  this.setState({spaceRows:e.target.value});
  // for(let i=0;i<this.state.noofRow;i++){
  //   string+=`<div class="row" style=${'margin:' + e.target.value + 'px 0px'} >`;
  //     for(let j=0;j<this.state.cols[i]; j++){
  //       string += `<div class="col" style=${'margin:0px '+ this.state.spaceBox +'px'}></div>`;
  //     }
  //     string+=`</div>`;
  
  
  // }
  // const node = document.querySelectorAll('#parent')[0];
  
  // node.innerHTML = string;

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
       <input onChange={this.updateRows} placeholder="enter no of rows"></input>
             <input onChange={this.updateCols} placeholder="enter no of columns"></input>
      <input onChange={this.updateRowspace} placeholder="enter space between rows"></input>
      <input onChange={this.updateColumnspace} placeholder="enter space between boxes"></input>

        <div id="parent">
       {/* {this.markup} */}
        </div>
   
      </div>
    );
  }
}

export default App;
