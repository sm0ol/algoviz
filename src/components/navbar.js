import React from 'react';
import '../styles/navbar.css'


class Navbar extends React.Component {
    constructor(props){
        super(props);
        
        this.addColumn = this.addColumn.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.clearContent = this.clearContent.bind(this);
    }

    addColumn(e){
        this.props.columnArr.push({boxes: [1]});
        this.props.updateColumnArr(this.props.columnArr);
    }

    bubbleSort(e){
        this.props.bubbleSort();
    }

    clearContent(){
        this.props.clearContent();
    }

    render () {
        return (
            <div className="algo-navbar">
                <button className="algo-navbar-button" onClick={this.clearContent}>Clear</button>
                <button className="algo-navbar-button" onClick={this.addColumn}>Add Column</button>
                <button className="algo-navbar-button" onClick={this.bubbleSort}>Bubble Sort</button>
            </div>
        )
    }
}

export default Navbar;