import React from 'react';
import '../styles/navbar.css'


class Navbar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectedSort: '',
            sortingMethods: {
                bubble: this.props.bubbleSort
            }
        } 
        this.addColumn = this.addColumn.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.clearContent = this.clearContent.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
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

    handleSelectChange = (e) => {
        this.setState({
            selectedSort: e.target.value
        })
    }

    render () {
        return (
            <div className="algo-navbar">
                <button className="algo-navbar-button" onClick={this.clearContent}>Clear</button>
                <button className="algo-navbar-button" onClick={this.addColumn}>Add Column</button>
                <select name="sorts" id="sort-select" className="algo-navbar-select" onChange={this.handleSelectChange}>
                    <option value="">Choose a sorting method</option>
                    <option value="bubble">Bubble</option>
                </select>
                <button className="algo-navbar-button" disabled={!this.state.selectedSort} onClick={this.state.sortingMethods[this.state.selectedSort]}>Sort!</button>

            </div>
        )
    }
}

export default Navbar;