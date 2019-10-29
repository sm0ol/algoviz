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
      columnArr: [],
      sortedColumnArr: []
    }

    this.onAddBox = this.onAddBox.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.switchColumns = this.switchColumns.bind(this);
  }

  onAddBox(colIndex, boxAmount) {
    let cols = [...this.state.columnArr];
    let colItem = {...cols[colIndex]};

    colItem.boxes = boxAmount;

    cols[colIndex] = colItem;

    this.setState({
      columnArr: cols
    });
  }

  handleAddColumn(columnArr) {
    this.setState({
      columnArr: columnArr
    });
  }

  bubbleSort(){
    let cols = [...this.state.columnArr];
    let len = cols.length;
    for(let i = 0; i < len - 1; i++){
      for(let j = 0; j < len - 1; j++){
        if(cols[j].boxes.length > cols[j + 1].boxes.length) {
          let tmp = cols[j];
          cols[j] = cols[j + 1];
          cols[j + 1] = tmp;
        }
      }
    }

    this.setState({
      sortedColumnArr: cols
    }, () => console.log(this.state));
  }

  switchColumns(col1, col2){
    let cols = [...this.state.columnArr];
    let temp1 = cols[col1];
    let temp2 = cols[col2];
    let colHolder = temp1;

    temp1 = temp2;
    temp2 = colHolder;

    cols[col1] = temp1;
    cols[col2] = temp2;

    this.setState({
      columnArr: cols
    });
  }

  render () {
    
    return (
      <div className="App">
        <Navbar updateColumnArr={this.handleAddColumn} updateBoxArr={this.handleAddBox} boxArr={this.state.boxArr} columnArr={this.state.columnArr} bubbleSort={this.bubbleSort}/>
        <div className="algo-viz-content">
          <div className="algo-viz-content-unsorted">
            {this.state.columnArr.map((col, index) => {
              return (
                <VizColumn key={index} index={index} column={this.state.columnArr[index]} onAddBox={this.onAddBox}/>
              );
            })}
          </div>
          <div className="algo-viz-content-sorted">
            {this.state.sortedColumnArr.map((col, index) => {
              return (
                <VizColumn key={index} index={index} column={this.state.sortedColumnArr[index]} onAddBox={this.onAddBox}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
