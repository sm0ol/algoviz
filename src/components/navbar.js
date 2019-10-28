import React from 'react';


class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.addBox = this.addBox.bind(this);
        this.subtractBox = this.subtractBox.bind(this);
        this.addColumn = this.addColumn.bind(this);
        this.subtractColumn = this.subtractColumn.bind(this);
    }

    addBox(e){
        this.props.boxArr.push(this.props.boxArr.length);
        this.props.updateBoxArr(this.props.boxArr);
    }

    subtractBox(e){
        this.props.boxArr.splice(this.props.boxArr.length - 1, 1);
        this.props.updateBoxArr(this.props.boxArr);
    }

    addColumn(e){
        this.props.columnArr.push(this.props.columnArr.length + 1);
        this.props.updateColumnArr(this.props.columnArr);
    }

    subtractColumn(e){
        this.props.columnArr.splice(this.props.columnArr.length - 1, 1);
        this.props.updateColumnArr(this.props.columnArr);
    }

    render () {
        return (
            <div className="algo-navbar">
                <button className="algo-navbar-button">Home</button>
                <button className="algo-navbar-button" onClick={this.addColumn}>Add column</button>
                <button className="algo-navbar-button" onClick={this.subtractColumn}>Subtract column</button>
            </div>
        )
    }
}

export default Navbar;