import React from 'react';
import Navbar from './components/navbar';
import VizColumn from './components/vizcolumn';
import './styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faArrowRight);

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      columnArr: [],
      sortedColumnArr: []
    }

    this.history = [];
    this.historyTracker = 0;

    this.onAddBox = this.onAddBox.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.incrementHistory = this.incrementHistory.bind(this);
    this.decrementHistory = this.decrementHistory.bind(this);
    this.clearContent = this.clearContent.bind(this);
    this.goToStart = this.goToStart.bind(this);
    this.goToEnd = this.goToEnd.bind(this);
    this.removeIndividualColumn = this.removeIndividualColumn.bind(this);
    this.clearSortedContent = this.clearSortedContent.bind(this);
  }

  onAddBox(colIndex, boxAmount) {
    let cols = [...this.state.columnArr];
    let colItem = {...cols[colIndex]};

    colItem.boxes = boxAmount;

    cols[colIndex] = colItem;

    if(this.state.sortedColumnArr.length > 0) {
      this.clearSortedContent();
    }

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
    let prevHistory = [...this.history];
    this.history = [];
    this.history.push([...cols]);
    for(let i = 0; i < len - 1; i++){
      for(let j = 0; j < len - 1; j++){
        if(cols[j].boxes.length > cols[j + 1].boxes.length) {
          let tmp = cols[j];
          cols[j] = cols[j + 1];
          cols[j + 1] = tmp;
          this.history.push([...cols]);
        }
      }
    }

    if(prevHistory.length === 0){
      this.historyTracker = this.history.length - 1;
    }

    this.goToEnd();
  }

  incrementHistory(){
    this.historyTracker++;
    this.setState({
      sortedColumnArr: [...this.history[this.historyTracker]]
    });
  }

  goToEnd(){
    this.historyTracker = this.history.length - 1;
    this.setState({
      sortedColumnArr: this.history[this.historyTracker]
    });
  }

  decrementHistory(){
    this.historyTracker--;
    this.setState({
      sortedColumnArr: this.history[this.historyTracker]
    });
  }

  goToStart(){
    this.historyTracker = 0;
    this.setState({
      sortedColumnArr: this.history[this.historyTracker]
    });
  }

  clearContent(){
    this.setState({
      columnArr: [],
      sortedColumnArr: []
    });
    this.history = [];
    this.historyTracker = 0;
  }

  clearSortedContent(){
    this.setState({
      sortedColumnArr: []
    });
    this.history = [];
    this.historyTracker = 0;
  }

  removeIndividualColumn(index){
    let cols = [...this.state.columnArr];
    cols.splice(index, 1);
    this.setState({
      columnArr: cols
    });
  }

  render () {
    
    return (
      <div className="App">
        <Navbar updateColumnArr={this.handleAddColumn} updateBoxArr={this.handleAddBox} boxArr={this.state.boxArr} columnArr={this.state.columnArr} bubbleSort={this.bubbleSort} clearContent={this.clearContent}/>
        <div className="algo-viz-content">
          <div className="algo-viz-content-unsorted">
            {this.state.columnArr.map((col, index) => {
              return (
                <VizColumn key={index} index={index} column={this.state.columnArr[index]} onAddBox={this.onAddBox} removeIndividualColumn={this.removeIndividualColumn}/>
              );
            })}
          </div>
          <div className="algo-viz-content-sorted">
            <div className="sorted-columns">
              {this.state.sortedColumnArr.map((col, index) => {
                return (
                  <VizColumn key={index + 'sorted'} index={index} column={this.state.sortedColumnArr[index]} active={this.history[this.historyTracker][index].active}/>
                );
              })}
            </div>
            <div className="algo-history-buttons">
              <button className="history-button" style={{fontWeight: `bold`}} disabled={this.historyTracker === 0} onClick={this.goToStart}>START</button>
              <button className="history-button" disabled={this.historyTracker === 0} onClick={this.decrementHistory}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
              <button className="history-button" disabled={this.historyTracker === this.history.length - 1 || this.history.length === 0} onClick={this.incrementHistory}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
              <button className="history-button" style={{fontWeight: `bold`}} disabled={this.historyTracker === this.history.length - 1 || this.history.length === 0} onClick={this.goToEnd}>END</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
