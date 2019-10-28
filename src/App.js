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
      boxArr: [],
      columnArr: []
    }

    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
  }

  handleAddBox(boxArr) {
    this.setState({
      boxArr: boxArr
    }, () => console.log('Updated boxArr: ', this.state.boxArr));
  }

  handleAddColumn(columnArr) {
    this.setState({
      columnArr: columnArr
    }, () => console.log('Updated columnArr: ', this.state.columnArr));
  }

  render () {
    
    return (
      <div className="App">
        <Navbar updateColumnArr={this.handleAddColumn} updateBoxArr={this.handleAddBox} boxArr={this.state.boxArr} columnArr={this.state.columnArr}/>
        <div className="algo-viz-content">
          {this.state.columnArr.map(col => {
            return (
              <VizColumn key={col} column={this.state.boxArr[col]}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
