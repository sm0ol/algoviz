import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import VizBox from './components/vizbox';
import VizColumn from './components/vizcolumn';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // boxArr: [],
      columnArr: []
    }

    this.onAddBox = this.onAddBox.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  onAddBox(colIndex, boxAmount) {
    let cols = [...this.state.columnArr];
    let colItem = {...cols[colIndex]};

    colItem.boxes = boxAmount;

    cols[colIndex] = colItem;

    this.setState({
      columnArr: cols
    }, () => console.log('Updated columnArr: ', this.state.columnArr));
  }

  handleAddColumn(columnArr) {
    this.setState({
      columnArr: columnArr
    }, () => console.log('Updated columnArr: ', this.state.columnArr));
  }

  bubbleSort(){
    let sorted = false;
    // for(var i = 0; i < this.state.columnArr.length; i++){
    //   console.log(this.state.columnArr[i]);
    // }
    for(var i = 1; i < this.state.columnArr.length; i++){
      console.log(this.state.columnArr[i]);
      let firstItem = this.state.columnArr[i];
      let secondItem = this.state.columnArr[i - 1];
      // let secondItem = (this.state.columnArr[i - 1]) ? this.state.columnArr[i - 1] : break;

      if(firstItem.boxes < secondItem.boxes){
        let temp = firstItem;
        firstItem = secondItem;
        secondItem = temp;
        sorted = false;
      }
    }
    // while(!sorted){
    //   sorted = true;
    //   for(var i = 1; i < this.state.columnArr.length; i++){
    //     console.log(this.state.columnArr[i]);
    //     let firstItem = this.state.columnArr[i];
    //     let secondItem = this.state.columnArr[i - 1];
    //     // let secondItem = (this.state.columnArr[i - 1]) ? this.state.columnArr[i - 1] : break;

    //     if(firstItem.boxes < secondItem.boxes){
    //       let temp = firstItem;
    //       firstItem = secondItem;
    //       secondItem = temp;
    //       sorted = false;
    //     }
    //   }
    // }
  }

  render () {
    
    return (
      <div className="App">
        <Navbar updateColumnArr={this.handleAddColumn} updateBoxArr={this.handleAddBox} boxArr={this.state.boxArr} columnArr={this.state.columnArr} bubbleSort={this.bubbleSort}/>
        <div className="algo-viz-content">
          {this.state.columnArr.map((col, index) => {
            return (
              <VizColumn key={index} index={index} column={this.state.columnArr[index]} onAddBox={this.onAddBox}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
